import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "kingswaycommunitylifecentre@gmail.com";
// Service/application requests (e.g. wedding) always go to the church admin inbox.
const SERVICE_REQUEST_EMAIL = process.env.SERVICE_REQUEST_EMAIL ?? "admin@kclcministries.org";
const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY ?? "";
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID ?? "";

interface ContactBody {
  name: string;
  email: string;
  message?: string;
  services?: string[];
  details?: string;
  formType: "message" | "service-request";
  website?: string; // honeypot field - should always be empty
  _ts?: number; // form load timestamp
}

interface Attachment {
  filename: string;
  content: Buffer;
}

const MAX_UPLOAD_BYTES = 4 * 1024 * 1024; // 4MB (Vercel serverless body limit)
const ALLOWED_UPLOAD_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
];

// Service labels that require a completed application form before the request can be submitted.
const SERVICES_REQUIRING_FORM = new Set(["Wedding Ceremony"]);

export async function POST(request: Request) {
  try {
    let body: ContactBody;
    let attachment: Attachment | undefined;

    const contentType = request.headers.get("content-type") ?? "";
    if (contentType.includes("multipart/form-data")) {
      // Service request with an optional completed form attached.
      const form = await request.formData();
      const rawServices = form.get("services");
      let services: string[] = [];
      if (typeof rawServices === "string" && rawServices) {
        try {
          const parsed = JSON.parse(rawServices);
          if (Array.isArray(parsed)) services = parsed.map(String);
        } catch {
          services = [];
        }
      }

      const rawTs = form.get("_ts");
      body = {
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        services,
        details: String(form.get("details") ?? ""),
        formType: "service-request",
        website: String(form.get("website") ?? ""),
        _ts: typeof rawTs === "string" && rawTs ? Number(rawTs) : undefined,
      };

      const upload = form.get("attachment");
      if (upload instanceof File && upload.size > 0) {
        if (upload.size > MAX_UPLOAD_BYTES) {
          return NextResponse.json(
            { error: "The uploaded file is too large. Please keep it under 4MB." },
            { status: 400 },
          );
        }
        if (upload.type && !ALLOWED_UPLOAD_TYPES.includes(upload.type)) {
          return NextResponse.json(
            { error: "Unsupported file type. Please upload a PDF, Word document, or image." },
            { status: 400 },
          );
        }
        attachment = {
          filename: upload.name || "completed-form",
          content: Buffer.from(await upload.arrayBuffer()),
        };
      }
    } else {
      body = (await request.json()) as ContactBody;
    }

    // Spam protection: reject if honeypot field is filled (bots auto-fill hidden fields)
    if (body.website) {
      // Return success to avoid tipping off the bot
      return NextResponse.json({ success: true });
    }

    // Spam protection: reject if form was submitted too quickly (under 2 seconds)
    const MIN_SUBMIT_TIME_MS = 2000;
    if (body._ts && Date.now() - body._ts < MIN_SUBMIT_TIME_MS) {
      return NextResponse.json({ success: true });
    }

    if (!body.name?.trim() || !body.email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    const requiresForm = body.services?.some((s) => SERVICES_REQUIRING_FORM.has(s));
    if (requiresForm && !attachment) {
      return NextResponse.json(
        { error: "Please attach your completed application form to submit this request." },
        { status: 400 },
      );
    }

    const isServiceRequest = body.formType === "service-request";

    const subject = isServiceRequest
      ? `Service Request from ${body.name}`
      : `New Message from ${body.name}`;

    const servicesList = body.services?.length
      ? body.services.map((s) => `  - ${s}`).join("\n")
      : "None selected";

    const htmlBody = isServiceRequest
      ? `
        <h2>Service Request</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Services Requested:</strong></p>
        <ul>${body.services?.map((s) => `<li>${s}</li>`).join("") ?? ""}</ul>
        ${body.details ? `<p><strong>Additional Details:</strong></p><p>${body.details}</p>` : ""}
        ${attachment ? `<p><strong>Attached form:</strong> ${attachment.filename} (see attachment)</p>` : ""}
      `
      : `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `;

    const { error } = await resend.emails.send({
      from: "KCLC Website <noreply@kclc.corexcreative.com>",
      to: [isServiceRequest ? SERVICE_REQUEST_EMAIL : CONTACT_EMAIL],
      replyTo: body.email,
      subject,
      html: htmlBody,
      attachments: attachment
        ? [{ filename: attachment.filename, content: attachment.content }]
        : undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 },
      );
    }

    // Add to Beehiiv subscriber list (fire-and-forget, don't block the response)
    fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email: body.email.toLowerCase().trim(),
          reactivate_existing: true,
          send_welcome_email: false,
        }),
      },
    ).catch((err) => console.error("Beehiiv subscribe error:", err));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
