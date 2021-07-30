module.exports = {
  siteMetadata: {
    title: "HOLY.WTF",
    siteUrl: "https://holy.wtf",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Finger Paint", "Allan", "Montserrat"],
        },
      },
    },
  ],
};
