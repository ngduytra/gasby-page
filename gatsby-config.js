module.exports = {
  siteMetadata: {
    title: "Tra_fist_gastby",
    description: "This is where I write my thoughts. Because evething in your mind, I can feel that!",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-135923888-2",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet"
  ],
};
