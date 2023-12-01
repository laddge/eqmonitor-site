import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes } from "prism-react-renderer";

const config: Config = {
  title: "EQMonitor",
  tagline: "Earthquake Monitoring Application",
  favicon: "img/favicon.ico",
  url: "https://eqmonitor.app",
  baseUrl: "/",

  organizationName: "YumNumm",
  projectName: "EQMonitor",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },
    announcementBar: {
      id: "supportus",
      content:
        '⭐️ If you like EQMonitor, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/YumNumm/EQMonitor">GitHub</a>! ⭐️',
      backgroundColor: "#D8E1FF",
      textColor: "#091E42",
      isCloseable: false,
    },
    navbar: {
      title: "EQMonitor",
      logo: {
        alt: "EQMonitor Logo",
        src: "img/logo.svg",
        width: 32,
        height: 32,
      },
      items: [
        {
          to: "https://github.com/YumNumm/EQMonitor",
          position: "right",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Ryotaro Onoue.`,
    },
    prism: {
      theme: themes.vsLight,
      darkTheme: themes.vsDark,
      additionalLanguages: ["bash", "dart", "yaml"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
