// Set at build time; previews stay out of search results by default.
const configuredUrl = process.env.SITE_URL

function resolveSiteUrl(): URL | undefined {
  if (!configuredUrl) return undefined
  const url = new URL(configuredUrl)
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash ||
    url.hostname === "localhost"
  ) {
    throw new Error(
      "SITE_URL must be the public HTTPS origin, e.g. https://your-domain.com"
    )
  }
  return url
}

export const siteUrl = resolveSiteUrl()
export const indexable =
  Boolean(siteUrl) && process.env.SITE_INDEXABLE === "true"
