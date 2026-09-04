import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Flhcc Tech",
  EMAIL: "contact@flhcctech.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Flhcc Tech is an independent iOS studio building native tools for Apple devices.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Occasional notes from Flhcc Tech on iOS development.",
};

export const APPS: Metadata = {
  TITLE: "APPs",
  DESCRIPTION: "Native apps for Apple devices, built by Flhcc Tech.",
};

export const SOCIALS: Socials = [
  // TODO: fill in real studio links, e.g. { NAME: "github", HREF: "https://github.com/..." }
];

export const BAMBOO_DRAGONFLY = {
  RULE_PROVIDER_URL_PREFIX: "https://raw.githubusercontent.com/xiguagua/ios_rule_script/refs/heads/bamboo-dragonfly/rule/Clash",
  LINK_ORIGIN: "https://link.flhcctech.com",
};
