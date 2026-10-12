import { useEffect, useState } from "react";
import { loadContent } from "./client";
import { buildEntityMap, FALLBACK_SETTINGS, type EntityMap } from "./resolveEntities";
import { staticArticle, type StaticArticle } from "@/data/fallback";

type ContentState = {
  article: StaticArticle;
  entities: EntityMap;
  loading: boolean;
};

const initialState: ContentState = {
  article: staticArticle,
  entities: buildEntityMap(FALLBACK_SETTINGS),
  loading: true,
};

/**
 * Loads CMS content, falling back to the bundled static article whenever
 * Sanity is unreachable, empty, or missing fields. The page always renders.
 */
export function useStoryContent(): ContentState {
  const [state, setState] = useState<ContentState>(initialState);

  useEffect(() => {
    let active = true;

    loadContent<Partial<StaticArticle>>()
      .then(({ entities, article }) => {
        if (!active) return;
        setState({
          article: { ...staticArticle, ...(article ?? {}) },
          entities,
          loading: false,
        });
      })
      .catch(() => {
        if (!active) return;
        setState({ ...initialState, loading: false });
      });

    return () => {
      active = false;
    };
  }, []);

  return state;
}