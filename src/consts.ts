import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Flhcc Tech",
  EMAIL: "contact@flhcctech.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const APPS: Metadata = {
  TITLE: "APPs",
  DESCRIPTION: "A collection of my apps, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/markhorn_dev",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/markhorn_dev"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/markhorn-dev",
  }
];

export const BAMBOO_DRAGONFLY = {
  RULE_PROVIDER_URL_PREFIX: "https://raw.githubusercontent.com/xiguagua/ios_rule_script/refs/heads/bamboo-dragonfly/rule/Clash",
  LINK_ORIGIN: "https://link.flhcctech.com",
};
