import {
  AudioWaveform,
  LogIn,
  Command,
  GalleryVerticalEnd,
  Settings2,
  KeySquare,
  SquareLibrary,
  LifeBuoy,
  UserLock,
  Bolt,
  Send,
  Gem,
  Music,
  Rocket,
  Newspaper,
  SportShoe,
  ChevronsLeftRightEllipsis,
  GamepadDirectional,
  LayoutDashboard,
  BarChart3,
  Globe2,
  Images,
  ListChecks,
  Package,
  Palette,
  ShoppingCart,
  Users,
} from "gorth-base-primitive/cores/lucide"

export const dashboardSidebar = {
  // user: {
  //   name: "shadcn",
  //   email: "m@example.com",
  //   avatar: "/avatars/shadcn.jpg",
  // },
  teams: [
    {
      name: "Gorth Inc.",
      logo: Gem,
      plan: "Enterprise",
    },
    {
      name: "Goraria Corp.",
      logo: ChevronsLeftRightEllipsis,
      plan: "Enterprise",
    },
    {
      name: "Gorthen Ltd.",
      logo: GamepadDirectional,
      plan: "Enterprise",
    },
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Logo Management",
      url: "#",
      icon: SquareLibrary,
      isActive: true,
      items: [
        {
          title: "Drafts",
          url: "/dashboard/logos/drafts",
        },
        {
          title: "Archived",
          url: "/dashboard/logos/archive",
        },
        {
          title: "Metadata Review",
          url: "/dashboard/logos/metadata",
        },
        {
          title: "Internal Notes",
          url: "/dashboard/logos/notes",
        },
      ],
    },
    {
      title: "Design Studio",
      url: "#",
      icon: Palette,
      isActive: true,
      items: [
        {
          title: "New SVG Logo",
          url: "/dashboard/studio/new",
        },
        {
          title: "Editor",
          url: "/dashboard/studio/editor",
        },
        {
          title: "Style Presets",
          url: "/dashboard/studio/presets",
        },
        {
          title: "Color Palettes",
          url: "/dashboard/studio/palettes",
        },
        {
          title: "Typography",
          url: "/dashboard/studio/typography",
        },
        {
          title: "Brand Kits",
          url: "/dashboard/studio/brand-kits",
        },
        {
          title: "AI Concepts",
          url: "/dashboard/studio/ai-concepts",
        },
        {
          title: "Revision Queue",
          url: "/dashboard/studio/revisions",
        },
      ],
    },
    {
      title: "Asset Admin",
      url: "#",
      icon: Images,
      items: [
        {
          title: "SVG Files",
          url: "/dashboard/assets/svg",
        },
        {
          title: "PNG Exports",
          url: "/dashboard/assets/png",
        },
        {
          title: "Source Files",
          url: "/dashboard/assets/source",
        },
        {
          title: "Upload Assets",
          url: "/dashboard/assets/upload",
        },
        {
          title: "Download Center",
          url: "/dashboard/assets/downloads",
        },
      ],
    },
    {
      title: "Sales Admin",
      url: "#",
      icon: ShoppingCart,
      items: [
        {
          title: "Coupons",
          url: "/dashboard/market/coupons",
        },
        {
          title: "Checkout Settings",
          url: "/dashboard/market/checkout",
        },
        {
          title: "License Rules",
          url: "/dashboard/market/license-rules",
        },
        {
          title: "Payout Reports",
          url: "/dashboard/market/payouts",
        },
      ],
    },
    {
      title: "Orders",
      url: "#",
      icon: Package,
      items: [
        {
          title: "All Orders",
          url: "/dashboard/orders",
        },
        {
          title: "Pending Review",
          url: "/dashboard/orders/pending",
        },
        {
          title: "Completed",
          url: "/dashboard/orders/completed",
        },
        {
          title: "Invoices",
          url: "/dashboard/orders/invoices",
        },
        {
          title: "Refunds",
          url: "/dashboard/orders/refunds",
        },
        {
          title: "Delivery Logs",
          url: "/dashboard/orders/delivery",
        },
      ],
    },
    {
      title: "Clients",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Customers",
          url: "/dashboard/clients",
        },
        {
          title: "Leads",
          url: "/dashboard/clients/leads",
        },
        {
          title: "Requests",
          url: "/dashboard/clients/requests",
        },
        {
          title: "Testimonials",
          url: "/dashboard/clients/testimonials",
        },
        {
          title: "Messages",
          url: "/dashboard/clients/messages",
        },
      ],
    },
    {
      title: "Publishing Tools",
      url: "#",
      icon: Globe2,
      items: [
        {
          title: "SEO Metadata",
          url: "/dashboard/publishing/seo",
        },
        {
          title: "Sitemap",
          url: "/dashboard/publishing/sitemap",
        },
        {
          title: "Social Preview",
          url: "/dashboard/publishing/social-preview",
        },
        {
          title: "Redirects",
          url: "/dashboard/publishing/redirects",
        },
      ],
    },
    {
      title: "Analytics",
      url: "#",
      icon: BarChart3,
      items: [
        {
          title: "Overview",
          url: "/dashboard/analytics",
        },
        {
          title: "Logo Views",
          url: "/dashboard/analytics/views",
        },
        {
          title: "Downloads",
          url: "/dashboard/analytics/downloads",
        },
        {
          title: "Conversions",
          url: "/dashboard/analytics/conversions",
        },
        {
          title: "Traffic Sources",
          url: "/dashboard/analytics/traffic",
        },
        {
          title: "Search Queries",
          url: "/dashboard/analytics/search",
        },
      ],
    },
    {
      title: "Operations",
      url: "#",
      icon: ListChecks,
      items: [
        {
          title: "Review Board",
          url: "/dashboard/operations/review",
        },
        {
          title: "Publish Queue",
          url: "/dashboard/operations/publish-queue",
        },
        {
          title: "Tasks",
          url: "/dashboard/operations/tasks",
        },
        {
          title: "Activity Log",
          url: "/dashboard/operations/activity",
        },
        {
          title: "Notifications",
          url: "/dashboard/operations/notifications",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/dashboard/settings",
        },
        {
          title: "Brand Profile",
          url: "/dashboard/settings/brand",
        },
        {
          title: "Team",
          url: "/dashboard/settings/team",
        },
        {
          title: "Billing & Payouts",
          url: "/dashboard/settings/billing",
        },
        {
          title: "Integrations",
          url: "/dashboard/settings/integrations",
        },
        {
          title: "Security",
          url: "/dashboard/settings/security",
        },
        {
          title: "Backup",
          url: "/dashboard/settings/backup",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  navDropdown: [
    {
      title: "Account",
      url: "#",
      icon: UserLock,
    },
    {
      title: "Setting",
      url: "#",
      icon: Bolt,
    },
  ],
  navSignal: [
    {
      title: "Sign in",
      url: "#",
      icon: LogIn,
    },
    {
      title: "Sign up",
      url: "#",
      icon: KeySquare,
    },
  ],
  projects: [
    {
      name: "Music",
      url: "/explore/music",
      icon: Music,
    },
    {
      name: "Gaming",
      url: "/explore/gaming",
      icon: Rocket,
    },
    {
      name: "News",
      url: "/explore/news",
      icon: Newspaper,
    },
    {
      name: "Sports",
      url: "/explore/sports",
      icon: SportShoe,
    },
  ],
}

