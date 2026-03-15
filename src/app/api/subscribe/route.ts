import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const SUBSCRIBERS_FILE = path.join(process.cwd(), "subscribers.json");

async function getSubscribers(): Promise<string[]> {
  try {
    const data = await fs.readFile(SUBSCRIBERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const normalised = email.toLowerCase().trim();
    const subscribers = await getSubscribers();

    if (subscribers.includes(normalised)) {
      return NextResponse.json({ message: "Already subscribed" });
    }

    subscribers.push(normalised);
    await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));

    return NextResponse.json({ message: "Subscribed" });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
