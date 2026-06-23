import { BAMBOO_DRAGONFLY } from "@consts";

export type RuleProviderItem = {
  name: string;
  format: string;
  content: string;
  policy: string;
};

function providerSlug(item: RuleProviderItem): string {
  return item.name.split("-")[0];
}

function fileStem(slug: string): string {
  return slug.replace(/\+$/, "");
}

export function buildProviderLink(item: RuleProviderItem): URL {
  const slug = providerSlug(item);
  const stem = fileStem(slug);

  const link = new URL(
    `/rule-providers/${slug}`,
    BAMBOO_DRAGONFLY.LINK_ORIGIN,
  );
  link.searchParams.set(
    "url",
    `${BAMBOO_DRAGONFLY.RULE_PROVIDER_URL_PREFIX}/${stem}/${stem}.list`,
  );
  link.searchParams.set("format", item.format);
  link.searchParams.set("content", item.content);
  link.searchParams.set("policy", item.policy);

  return link;
}
