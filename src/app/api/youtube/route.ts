import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const channelId = searchParams.get("channelId");

  if (!channelId) {
    return NextResponse.json({ error: "channelId required" }, { status: 400 });
  }

  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  try {
    const res = await fetch(feedUrl, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; KCLCWebsite/1.0)",
      },
    });
    if (!res.ok) throw new Error("Feed fetch failed");
    const xml = await res.text();
    return new NextResponse(xml, {
      headers: { "Content-Type": "application/xml" },
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch feed" }, { status: 502 });
  }
}
