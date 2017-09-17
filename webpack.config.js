module.exports = {
  entry: "./js/app.js",
  output: {
    filename: "bundle.js"
  },
    // Automatically compile when files change.
    watch: true,
    // Automatically reload the page when compilation is done.
    devServer: {
      inline: true
    },
    // Add sass-loader
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    }
};
