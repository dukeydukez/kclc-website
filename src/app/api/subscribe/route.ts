import { NextResponse } from "next/server";

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY ?? "";
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID ?? "";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          reactivate_existing: true,
          send_welcome_email: true,
        }),
      },
    );

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      console.error("Beehiiv error:", res.status, data);
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Subscribed" });
  } catch (err) {
    console.error("Subscribe API error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
