import { getCollection, type CollectionEntry } from "astro:content";

export function getPublished(collection: "blog"): Promise<CollectionEntry<"blog">[]>;
export function getPublished(collection: "apps"): Promise<CollectionEntry<"apps">[]>;
export async function getPublished(collection: "blog" | "apps") {
  const entries = await getCollection(collection);
  return entries
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
