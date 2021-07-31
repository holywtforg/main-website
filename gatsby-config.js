module.exports = {
  siteMetadata: {
    title: "HOLY.WTF",
    siteUrl: "https://holy.wtf",
    titleTemplate: "%s - holy.wtf",
    description: "Holy.WTF is a team initiative building open software by any means necessary",
    image: "/images/cover.png",
    twitterUsername: "@holy.wtf",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Finger Paint", "Allan", "Montserrat"],
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
