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
          href: "https://gitlab.positiveaction.work/developer/dev-wiki",
          label: "GitLab",
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
            /* {
              label: "Second Doc",
              to: "docs/doc2/",
            }, */
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
              label: "GitLab",
              href: "https://gitlab.positiveaction.work/developer/dev-wiki",
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
          // Please change this to your repo.
          editUrl:
            "https://gitlab.positiveaction.work/developer/dev-wiki/edit/master",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://gitlab.positiveaction.work/developer/dev-wiki/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
