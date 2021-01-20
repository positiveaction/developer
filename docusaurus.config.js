module.exports = {
  title: "PA Developer's  Wiki/Documentation",
  tagline: "Effective Social & Emotional Learning",
  url: "https://positiveaction.github.io",
  baseUrl: "/developer-docs/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "positiveaction", // Usually your GitHub org/user name.
  projectName: "developer-docs", // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",
    },
    /*algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      searchParameters: {}, // Optional (if provided by Algolia)
    },*/
    navbar: {
      title: "PA Dev Wiki",
      logo: {
        alt: "Positive Action Documentation",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/positiveaction/developer-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/positiveaction/developer-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/positiveaction/developer-docs/edit/master",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/positiveaction/developer-docs/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
