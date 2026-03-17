import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "kingswaycommunitylifecentre@gmail.com";
const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY ?? "";
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID ?? "";

interface ContactBody {
  name: string;
  email: string;
  message?: string;
  services?: string[];
  details?: string;
  formType: "message" | "service-request";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    if (!body.name?.trim() || !body.email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
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
      `
      : `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `;

    const { error } = await resend.emails.send({
      from: "KCLC Website <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      replyTo: body.email,
      subject,
      html: htmlBody,
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
