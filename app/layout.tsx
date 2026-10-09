import type { Metadata } from "next"
import localFont from "next/font/local"
import { indexable, siteUrl } from "@/lib/site"
import "./globals.css"
import "./card-sections.css"

const editorial = localFont({
  src: [
    { path: "./fonts/cormorant.woff2", weight: "400 500", style: "normal" },
    { path: "./fonts/cormorant-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-editorial",
  display: "swap",
})
const sans = localFont({
  src: [{ path: "./fonts/inter.woff2", weight: "400 500", style: "normal" }],
  variable: "--font-interface",
  display: "swap",
})

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: siteUrl, alternates: { canonical: "/" } } : {}),
  robots: { index: indexable, follow: indexable },
  title: "MEHRE — For every chapter, beautifully.",
  description:
    "Discover MEHRE: Pakistani suits, celebration lehengas and light ivory bridal ensembles. Explore The Living Edit, Rang and Ivory Vows.",
  openGraph: {
    type: "website",
    siteName: "MEHRE",
    locale: "en_PK",
    ...(siteUrl ? { url: siteUrl.href } : {}),
    title: "MEHRE — The Collections",
    description:
      "Pakistani suits, celebration lehengas and light ivory bridal collections.",
    images: siteUrl
      ? [
          {
            url: "/media/hero-premium-desktop.webp",
            width: 1672,
            height: 941,
            alt: "MEHRE celebration and ivory bridal collections",
          },
        ]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEHRE — For every chapter, beautifully.",
    description:
      "Pakistani suits, celebration lehengas and light ivory bridal ensembles.",
    images: siteUrl
      ? [new URL("/media/hero-premium-desktop.webp", siteUrl).href]
      : [],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${editorial.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
