import {
  AudioWaveform,
  BookOpen,
  LogIn,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings,
  Settings2,
  KeySquare,
  SquareTerminal,
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
  LayoutDashboard
} from "gorth-ui/cores/lucide"

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
      title: "Logo",
      url: "#",
      icon: SquareLibrary,
      isActive: true,
      items: [
        {
          title: "Gorth",
          url: "#",
        },
        {
          title: "Goraricorp",
          url: "#",
        },
        {
          title: "Gorthen",
          url: "#",
        },
      ],
    },
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
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
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
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
      url: "/explore/news",
      icon: SportShoe,
    },
  ],
}