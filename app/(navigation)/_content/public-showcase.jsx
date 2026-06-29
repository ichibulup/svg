import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Download, Sparkles } from "gorth-base-primitive/cores/lucide"
import { Badge } from "gorth-base-primitive/default/badge"
import { Button } from "gorth-base-primitive/default/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "gorth-base-primitive/default/card"

const logoAssets = [
  { name: "Gorth", file: "/Gorth.svg", label: "Primary mark" },
  { name: "Logo", file: "/Logo.svg", label: "Brand lockup" },
  { name: "Circle", file: "/Circle.svg", label: "App icon" },
  { name: "Final", file: "/Final.svg", label: "Campaign mark" },
]

export const publicPages = {
  logos: {
    eyebrow: "Logo Catalog",
    title: "SVG logos ready for sharp digital presentation",
    description: "Browse curated logo marks, brand symbols, and vector-ready identity assets for product pages, app icons, and launch visuals.",
    primaryHref: "/collections",
    primaryLabel: "Browse Collections",
    secondaryHref: "/pricing",
    secondaryLabel: "View Pricing",
    highlights: ["Vector-first source files", "Transparent exports", "Commercial-use options"],
  },
  featured: {
    eyebrow: "Featured Showcase",
    title: "Selected logo designs with the strongest visual systems",
    description: "A focused showcase for the marks that best represent your metallic, geometric, premium, and minimal SVG logo language.",
    primaryHref: "/logos",
    primaryLabel: "View All Logos",
    secondaryHref: "/licenses",
    secondaryLabel: "License Details",
    highlights: ["Hero-ready compositions", "Curated for presentation", "Built for high-DPI screens"],
  },
  collections: {
    eyebrow: "Collections",
    title: "Logo collections grouped by style, market, and usage",
    description: "Explore sets for gaming brands, SaaS products, music projects, fashion labels, and premium icon-led identities.",
    primaryHref: "/products",
    primaryLabel: "See Products",
    secondaryHref: "/templates",
    secondaryLabel: "Explore Templates",
    highlights: ["Style-based grouping", "Bundle-friendly structure", "Easy client comparison"],
  },
  categories: {
    eyebrow: "Categories",
    title: "Find logos by industry and brand personality",
    description: "Use categories to separate bold marks, elegant monograms, abstract emblems, and product-ready app symbols.",
    primaryHref: "/tags",
    primaryLabel: "Browse Tags",
    secondaryHref: "/collections",
    secondaryLabel: "Open Collections",
    highlights: ["Industry filters", "Mood filters", "Use-case browsing"],
  },
  tags: {
    eyebrow: "Tags",
    title: "Search logos by color, geometry, texture, and mood",
    description: "A fast discovery layer for visitors who know the feeling they want before they know the exact logo shape.",
    primaryHref: "/logos",
    primaryLabel: "Search Logos",
    secondaryHref: "/featured",
    secondaryLabel: "Featured Picks",
    highlights: ["Metallic", "Minimal", "Geometric", "Luxury", "Tech", "Gaming"],
  },
  mockups: {
    eyebrow: "Mockups",
    title: "Preview SVG logos in real brand surfaces",
    description: "Show how each mark works on app icons, profile avatars, packaging, merch, stationery, and landing pages.",
    primaryHref: "/logos",
    primaryLabel: "Choose a Logo",
    secondaryHref: "/templates",
    secondaryLabel: "Use Templates",
    highlights: ["Presentation scenes", "Client-ready previews", "Consistent export framing"],
  },
  icons: {
    eyebrow: "Icon Sets",
    title: "Companion icons for stronger logo systems",
    description: "Pair a logo with matching symbols, UI marks, badges, and product icons so the identity feels complete beyond the main emblem.",
    primaryHref: "/products",
    primaryLabel: "View Icon Products",
    secondaryHref: "/licenses",
    secondaryLabel: "Usage Rights",
    highlights: ["Matching visual language", "SVG-ready icons", "Product UI friendly"],
  },
  templates: {
    eyebrow: "Templates",
    title: "Reusable SVG logo templates for fast identity direction",
    description: "Start from structured layouts, editable geometry, and polished composition systems for rapid logo exploration.",
    primaryHref: "/products",
    primaryLabel: "Shop Templates",
    secondaryHref: "/mockups",
    secondaryLabel: "Preview Mockups",
    highlights: ["Editable foundations", "Reusable grids", "Consistent exports"],
  },
  products: {
    eyebrow: "Products",
    title: "Individual SVG logo products for immediate use",
    description: "Product pages can present each logo with previews, included formats, license notes, and purchase-ready details.",
    primaryHref: "/pricing",
    primaryLabel: "Compare Pricing",
    secondaryHref: "/bundles",
    secondaryLabel: "View Bundles",
    highlights: ["Single-logo purchases", "Format breakdown", "License clarity"],
  },
  bundles: {
    eyebrow: "Bundles",
    title: "Grouped logo packs for larger brand explorations",
    description: "Bundle related logo marks, icons, mockups, and templates into easier packages for studios and founders.",
    primaryHref: "/products",
    primaryLabel: "Browse Products",
    secondaryHref: "/licenses",
    secondaryLabel: "Bundle Licenses",
    highlights: ["Better value packs", "Theme-based sets", "Studio workflow friendly"],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Simple pricing for logos, templates, and commercial use",
    description: "Give visitors a clear path from browsing to buying with transparent tiers for personal, commercial, and extended usage.",
    primaryHref: "/products",
    primaryLabel: "Choose a Product",
    secondaryHref: "/licenses",
    secondaryLabel: "Read Licenses",
    highlights: ["Personal tier", "Commercial tier", "Extended rights"],
  },
  licenses: {
    eyebrow: "Licenses",
    title: "Usage rights explained before purchase",
    description: "Help buyers understand what they can use, modify, resell, and publish when working with your SVG logo designs.",
    primaryHref: "/pricing",
    primaryLabel: "Back to Pricing",
    secondaryHref: "/products",
    secondaryLabel: "View Products",
    highlights: ["Commercial clarity", "Modification rules", "Resale boundaries"],
  },
  downloads: {
    eyebrow: "Downloads",
    title: "Clean delivery pages for purchased logo assets",
    description: "A customer-facing download surface for SVG, PNG, source files, mockups, and documentation after purchase.",
    primaryHref: "/products",
    primaryLabel: "Browse Products",
    secondaryHref: "/licenses",
    secondaryLabel: "License Notes",
    highlights: ["SVG package", "PNG exports", "Mockup files", "Readme included"],
  },
  blog: {
    eyebrow: "Blog",
    title: "Stories and notes behind SVG logo design",
    description: "Publish process breakdowns, brand identity notes, SVG optimization lessons, and product updates that help buyers trust the work.",
    primaryHref: "/featured",
    primaryLabel: "Featured Work",
    secondaryHref: "/logos",
    secondaryLabel: "Logo Catalog",
    highlights: ["Design process", "SVG optimization", "Brand identity ideas"],
  },
}

export function PublicShowcasePage({ pageKey }) {
  const page = publicPages[pageKey]

  return (
    <div className="space-y-10 pb-12">
      <section className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-zinc-50 via-white to-cyan-50 p-6 shadow-sm md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <Badge variant="outline" className="w-fit bg-background/70">
              {page.eyebrow}
            </Badge>
            <div className="space-y-3">
              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                {page.title}
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                {page.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={page.primaryHref}>
                  {page.primaryLabel}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={page.secondaryHref}>{page.secondaryLabel}</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {logoAssets.map((asset) => (
              <div key={asset.file} className="rounded-xl border bg-background/80 p-4 shadow-sm">
                <div className="grid aspect-square place-items-center rounded-lg border border-dashed bg-muted/40 p-4">
                  <Image src={asset.file} alt={asset.name} width={120} height={120} className="h-20 w-20 object-contain" />
                </div>
                <div className="mt-3 space-y-1">
                  <p className="text-sm font-medium">{asset.name}</p>
                  <p className="text-xs text-muted-foreground">{asset.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {page.highlights.map((item) => (
          <Card key={item} className="bg-background/80">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <CheckCircle2 className="size-4 text-cyan-700" />
                {item}
              </CardTitle>
              <CardDescription>
                Built to help visitors evaluate the work quickly and move toward the next step.
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Sparkles className="size-4 text-amber-600" />
              Showcase Ready
            </CardTitle>
            <CardDescription>Designed for public browsing with navbar and footer instead of admin chrome.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Download className="size-4 text-cyan-700" />
              Asset Focused
            </CardTitle>
            <CardDescription>Each page can grow into product grids, previews, download flows, or editorial content.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Dashboard Cleaned</CardTitle>
            <CardDescription>Dashboard links now stay focused on private management and operations.</CardDescription>
          </CardHeader>
        </Card>
      </section>
    </div>
  )
}