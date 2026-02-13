import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: ["content:encoded"],
  },
});

const MEDIUM_FEED_URL = "https://medium.com/feed/@inspired-monster";

function extractThumbnail(contentEncoded) {
  if (!contentEncoded) return null;
  const match = contentEncoded.match(/<img[^>]+src="([^"]+)"/);
  return match ? match[1] : null;
}

function extractSlug(link) {
  if (!link) return "";
  const url = new URL(link);
  const parts = url.pathname.split("/").filter(Boolean);
  return parts[parts.length - 1] || "";
}

function removeFirstImage(html) {
  if (!html) return html;
  // Remove the first <figure> that contains an <img>, or the first standalone <img>
  const figureRemoved = html.replace(/<figure[^>]*>[\s\S]*?<img[\s\S]*?<\/figure>/, "");
  if (figureRemoved !== html) return figureRemoved;
  return html.replace(/<img[^>]*>/, "");
}

function removeTrackingPixels(html) {
  if (!html) return html;
  // Remove Medium tracking pixels (images with no meaningful src or stat tracking URLs)
  return html
    .replace(/<img[^>]*src="https:\/\/medium\.com\/_\/stat[^"]*"[^>]*>/gi, "")
    .replace(/<img[^>]*src=""[^>]*>/gi, "")
    .replace(/<img[^>]*height="1"[^>]*>/gi, "")
    .replace(/<img[^>]*width="1"[^>]*>/gi, "");
}

function removeMediumFooter(html) {
  if (!html) return html;
  // Find the last paragraph containing the Medium footer text
  const footerIndex = html.lastIndexOf("was originally published in");
  if (footerIndex === -1) return html;
  const before = html.substring(0, footerIndex);
  const pStart = before.lastIndexOf("<p");
  if (pStart === -1) return html;
  return html.substring(0, pStart).trim();
}

function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

function estimateReadingTime(html) {
  const text = stripHtml(html);
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function handler(req, res) {
  try {
    const feed = await parser.parseURL(MEDIUM_FEED_URL);

    const articles = feed.items.map((item) => {
      const contentEncoded = item["content:encoded"] || "";
      const thumbnail = extractThumbnail(contentEncoded);
      const slug = extractSlug(item.link);

      return {
        slug,
        title: item.title,
        thumbnail,
        description: stripHtml(item.contentSnippet || item.content || ""),
        content: removeMediumFooter(removeTrackingPixels(contentEncoded)),
        link: item.link,
        pubDate: item.pubDate,
        categories: item.categories || [],
        readingTime: estimateReadingTime(contentEncoded),
      };
    });

    res.status(200).json(articles);
  } catch (error) {
    console.error("Error fetching Medium feed:", error);
    res.status(500).json({ error: "Failed to fetch Medium articles" });
  }
}
