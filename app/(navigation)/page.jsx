import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  LayoutDashboard,
  Sparkles,
  SwatchBook,
} from "gorth-base-primitive/cores/lucide";
import { Badge } from "gorth-base-primitive/default/badge";
import { Button } from "gorth-base-primitive/default/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "gorth-base-primitive/default/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "gorth-base-primitive/default/navigation-menu";
import { Separator } from "gorth-base-primitive/default/separator";

const showcaseLogos = [
  { name: "Gorth", file: "/Gorth.svg", tone: "Metallic", usage: "Primary mark" },
  { name: "Logo", file: "/Logo.svg", tone: "Royal", usage: "Brand lockup" },
  { name: "Circle", file: "/Circle.svg", tone: "Minimal", usage: "Avatar / app icon" },
  { name: "Final", file: "/Final.svg", tone: "Polished", usage: "Campaign visual" },
  { name: "Sub", file: "/Sub.svg", tone: "Technical", usage: "Sub-brand" },
  { name: "Optimize", file: "/Optimize.svg", tone: "Editorial", usage: "Light theme pages" },
];

const paletteNotes = [
  { title: "Horizontal Navigation", note: "Keep top navigation horizontal for landing flow." },
  { title: "SVG First", note: "Prefer SVG assets for sharp rendering at every size." },
  { title: "Shadcn Blocks", note: "Use gorth-base-primitive/default components for consistent styling." },
];

export default function Home() {
  return (
    <div className="space-y-8 pb-12">
      <section className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-amber-50 via-white to-cyan-50 p-6 shadow-sm md:p-10">
        <div className="flex flex-col gap-5">
          <Badge variant="outline" className="w-fit border-amber-300/70 bg-amber-100/60 text-amber-900">
            SVG Logo Showcase
          </Badge>

          <NavigationMenu viewport={false} className="w-full max-w-full justify-start">
            <NavigationMenuList className="flex-wrap justify-start gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#featured">Featured</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#collection">Collection</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#guideline">Guideline</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div id="featured" className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Landing page for SVG logo showcase
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              Horizontal-first homepage with quick navigation, logo previews,
              and direct access to the vertical dashboard settings.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/dashboard">
                Open Dashboard
                <LayoutDashboard className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/demo">
                Auth Demo
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="collection" className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold md:text-2xl">Logo Collection</h2>
          <Badge variant="secondary">{showcaseLogos.length} assets</Badge>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {showcaseLogos.map((logo) => (
            <Card key={logo.file} className="overflow-hidden border-border/80">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{logo.name}</CardTitle>
                <CardDescription>{logo.usage}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid place-items-center rounded-xl border border-dashed border-border/80 bg-gradient-to-br from-zinc-50 to-zinc-100 p-6 dark:from-zinc-900 dark:to-zinc-800">
                  <Image
                    src={logo.file}
                    alt={logo.name}
                    width={148}
                    height={148}
                    className="h-28 w-28 object-contain"
                  />
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Badge variant="outline">{logo.tone}</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section id="guideline" className="grid gap-4 md:grid-cols-3">
        {paletteNotes.map((item) => (
          <Card key={item.title} className="bg-background/70">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                {item.title === "Horizontal Navigation" ? (
                  <SwatchBook className="size-4 text-amber-600" />
                ) : item.title === "SVG First" ? (
                  <Sparkles className="size-4 text-cyan-700" />
                ) : (
                  <LayoutDashboard className="size-4 text-slate-700" />
                )}
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {item.note}
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

