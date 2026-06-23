# Flhcc Tech

The marketing site for Flhcc Tech — an independent iOS developer. Static Astro site hosting a portfolio, blog, an app catalogue, and Bamboo Dragonfly's rule-provider shop.

## Language

### Rule-provider shop

The Bamboo Dragonfly app ships a catalogue of Clash rule-provider subscriptions. Each entry in the catalogue is a **rule-provider item**. The site renders each item as a link that subscribes the user to a remote `.list` file.

**Rule-provider item**:
One entry in the rule-provider catalogue. Has a human-facing `name`, plus `format`, `content`, and `policy` fields used verbatim as URL query params.
_Avoid_: provider, rule, entry.

**Provider slug**:
The link-domain identifier for a rule-provider item — the first segment of the item's `name` when split on `-`. Retains a trailing `+` suffix if present (the `+` marks an "extended" grouping in the link domain). Used as the path segment in the subscription link. e.g. `Claude+`, `AliPay`.
_Avoid_: shortName, prefix, id.

**File stem**:
The file-domain identifier for a rule-provider item — the provider slug with any trailing `+` stripped. Names the `.list` file on the remote rule repository. e.g. `Claude`, `AliPay`.
_Avoid_: clearName, slug (overloaded with provider slug).

### Example dialogue

> **Dev**: Why does `Claude+` keep the `+` in the link but not in the file URL?
>
> **Domain expert**: The `+` is meaningful in the link domain — it tells Bamboo Dragonfly this is an extended rule set. But the files on the repo are just named `Claude/Claude.list`, no `+`.
>
> **Dev**: So the provider slug is `Claude+` and the file stem is `Claude`.
>
> **Domain expert**: Right. Two names for two domains — don't collapse them.
