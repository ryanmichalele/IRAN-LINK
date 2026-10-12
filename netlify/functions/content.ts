import { createClient } from "@sanity/client";

/**
 * Server-side proxy for the private Sanity dataset.
 * Keeps the read token off the client: the browser only ever sees resolved
 * public content, never a credential.
 */

const projectId = process.env.SANITY_PROJECT_ID || "tcitfba9";
const dataset = process.env.SANITY_DATASET || "production";

const CONTENT_QUERY = `{
  "settings": *[_type == "storySettings"][0]{
    bankName, locationName, advisorName,
    bankKey, locationKey, advisorKey
  },
  "article": *[_type == "article"][0]{
    outlet, section, kicker, title, dek, byline,
    published, updated, readTime, location, heroCaption,
    tickerItems, editorNote, bodySections, quotes, timeline,
    timelineKicker, timelineHeading,
    protectEyebrow, protectHeading, protectBlurb, protectionTips,
    bottomLineEyebrow, bottomLineHeading, bottomLineBody,
    keyFacts, guidanceEyebrow, guidanceHeading, guidanceBlurb,
    scopeItems, whyItMatters, relatedStories,
    newsletterKicker, newsletterHeading, newsletterBlurb, stats
  }
}`;

export default async (request: Request): Promise<Response> => {
  if (request.method !== "GET") {
    return new Response(JSON.stringify({ error: "method_not_allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const token = process.env.SANITY_READ_TOKEN;
  if (!token) {
    return new Response(JSON.stringify({ error: "server_misconfigured" }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });
  }

  try {
    const client = createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      token,
      useCdn: false,
    });

    const data = await client.fetch(CONTENT_QUERY);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        // Short cache so CMS edits appear quickly without hammering Sanity.
        "Cache-Control": "public, max-age=0, s-maxage=30, stale-while-revalidate=300",
      },
    });
  } catch (err) {
    console.error("Sanity proxy failed", err);
    return new Response(JSON.stringify({ error: "content_unavailable" }), {
      status: 502,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });
  }
};