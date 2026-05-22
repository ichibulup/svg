import Image from "next/image";
import {
  Bolt,
  Palette,
  ShieldCheck,
  SlidersHorizontal,
} from "gorth-ui/cores/lucide";
import { Badge } from "gorth-ui/default/badge";
import { Button } from "gorth-ui/custom/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "gorth-ui/default/card";
import { Input } from "gorth-ui/default/input";
import { Label } from "gorth-ui/default/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "gorth-ui/default/select";
import { Separator } from "gorth-ui/default/separator";
import { Switch } from "gorth-ui/default/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "gorth-ui/custom/tabs";
import { Textarea } from "gorth-ui/default/textarea";

const previewLogos = [
  { name: "Gorth", file: "/Gorth.svg" },
  { name: "Logo", file: "/Logo.svg" },
  { name: "Final", file: "/Final.svg" },
];

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
      <section className="rounded-2xl border border-border bg-gradient-to-r from-slate-50 to-zinc-100 p-5 dark:from-zinc-900 dark:to-zinc-800">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Dashboard Settings</h1>
            <p className="text-sm text-muted-foreground">
              Vertical controls for SVG logo showcase configuration.
            </p>
          </div>
          <Badge variant="outline" className="bg-background/70">
            Vertical layout
          </Badge>
        </div>
      </section>

      <Tabs defaultValue="display" orientation="vertical" className="gap-6 lg:flex-row">
        <TabsList className="w-full shrink-0 lg:w-64">
          <TabsTrigger value="display" className="gap-2">
            <SlidersHorizontal className="size-4" />
            Display
          </TabsTrigger>
          <TabsTrigger value="branding" className="gap-2">
            <Palette className="size-4" />
            Branding
          </TabsTrigger>
          <TabsTrigger value="publish" className="gap-2">
            <ShieldCheck className="size-4" />
            Publish
          </TabsTrigger>
        </TabsList>

        <TabsContent value="display" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Display Rules</CardTitle>
              <CardDescription>
                Configure card presentation on the horizontal landing page.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="grid-size">Grid Density</Label>
                <Select defaultValue="balanced">
                  <SelectTrigger id="grid-size">
                    <SelectValue placeholder="Select density" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="balanced">Balanced</SelectItem>
                    <SelectItem value="spacious">Spacious</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="radius">Card Radius</Label>
                <Input id="radius" defaultValue="16px" />
              </div>

              <div className="flex items-center justify-between rounded-xl border p-3">
                <div>
                  <p className="text-sm font-medium">Show Gradient Background</p>
                  <p className="text-xs text-muted-foreground">Enable gradient behind each logo.</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between rounded-xl border p-3">
                <div>
                  <p className="text-sm font-medium">Show Asset Tag</p>
                  <p className="text-xs text-muted-foreground">Display style badge on each card.</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Display</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preview Strip</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-3">
                {previewLogos.map((logo) => (
                  <div
                    key={logo.file}
                    className="rounded-xl border border-dashed border-border bg-gradient-to-br from-zinc-50 to-zinc-100 p-4 text-center dark:from-zinc-900 dark:to-zinc-800"
                  >
                    <Image
                      src={logo.file}
                      alt={logo.name}
                      width={96}
                      height={96}
                      className="mx-auto h-20 w-20 object-contain"
                    />
                    <p className="mt-2 text-xs text-muted-foreground">{logo.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branding" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Brand Identity</CardTitle>
              <CardDescription>
                Edit collection naming, tone, and descriptive guidelines.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="collection-name">Collection Name</Label>
                <Input id="collection-name" defaultValue="Gorth SVG Collection" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tone">Primary Tone</Label>
                <Select defaultValue="metallic">
                  <SelectTrigger id="tone">
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="metallic">Metallic</SelectItem>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="minimal">Minimal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  defaultValue="Logo pack used for landing page modules, social avatars, and dashboard assets."
                />
              </div>
            </CardContent>
            <CardFooter className="flex items-center gap-2">
              <Button>Save Branding</Button>
              <Button variant="outline">Reset</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="publish" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Release & Access</CardTitle>
              <CardDescription>
                Manage visibility and release state for the logo package.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-xl border p-3">
                <div>
                  <p className="text-sm font-medium">Public Download</p>
                  <p className="text-xs text-muted-foreground">
                    Allow direct SVG downloads from the landing page.
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between rounded-xl border p-3">
                <div>
                  <p className="text-sm font-medium">Require Dashboard Auth</p>
                  <p className="text-xs text-muted-foreground">
                    Require sign in before accessing settings pages.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="rounded-xl border bg-muted/20 p-3 text-sm text-muted-foreground">
                Publishing updates all navigation pages to use the latest approved logo set.
              </div>
            </CardContent>
            <CardFooter className="flex items-center gap-2">
              <Button>
                Publish Pack
                <Bolt className="size-4" />
              </Button>
              <Button variant="outline">Save Draft</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

