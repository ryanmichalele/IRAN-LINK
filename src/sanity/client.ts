import {
  buildEntityMap,
  FALLBACK_SETTINGS,
  resolveEntities,
  type EntityMap,
  type StorySettings,
} from "./resolveEntities";
import type { StaticArticle } from "@/data/fallback";

type ContentPayload = {
  settings: StorySettings | null;
  article: Partial<StaticArticle> | null;
};

/**
 * Fetches CMS content through the server-side proxy at /api/content.
 * Falls back to bundled static content when the proxy is unavailable,
 * so the page always renders.
 */
export async function loadContent<T>(): Promise<{
  entities: EntityMap;
  article: T | null;
}> {
  try {
    const res = await fetch("/api/content", {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`content proxy: ${res.status}`);

    const payload = (await res.json()) as ContentPayload;

    const settings: StorySettings = {
      ...FALLBACK_SETTINGS,
      ...(payload.settings ?? {}),
    };

    return {
      entities: buildEntityMap(settings),
      article: (payload.article ?? null) as T | null,
    };
  } catch {
    return { entities: buildEntityMap(FALLBACK_SETTINGS), article: null };
  }
}

export { resolveEntities };