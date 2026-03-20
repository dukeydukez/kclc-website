/**
 * Fetches YouTube RSS feed at build time and writes video data to a JSON file.
 * Run before `next build` so video data is baked into the site.
 */

const CHANNEL_ID = "UCdbja-jeoPwwSg2MGLTTVGA";
const OUTPUT_PATH = new URL("../src/data/videos.json", import.meta.url);

async function fetchVideos() {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
  const res = await fetch(feedUrl);

  if (!res.ok) {
    console.error(`Failed to fetch YouTube RSS: ${res.status}`);
    process.exit(1);
  }

  const xml = await res.text();

  // Parse entries using regex (no DOM in Node without extra deps)
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];

  const videos = entries.map((match) => {
    const entry = match[1];
    const id = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] ?? "";
    const title = entry.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
    const published = entry.match(/<published>(.*?)<\/published>/)?.[1] ?? "";

    return {
      id,
      title,
      published,
      thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    };
  });

  const { writeFileSync, mkdirSync } = await import("node:fs");
  const { dirname } = await import("node:path");
  const { fileURLToPath } = await import("node:url");

  const outPath = fileURLToPath(OUTPUT_PATH);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(videos, null, 2));

  console.log(`Wrote ${videos.length} videos to ${outPath}`);
}

fetchVideos();
