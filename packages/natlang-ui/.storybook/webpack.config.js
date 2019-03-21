const path = require("path")
const webpack = require("webpack")

module.exports = async ({ config, mode }) => {
  config.plugins.push(
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    })
  )
  config.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/, /[A-Z]*\.story\.js/],
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    include: [path.resolve(__dirname, "../src")],
    enforce: "pre",
  })
  // https://webpack.js.org/loaders/url-loader
  config.module.rules.push({
    test: /\.(mp3|ogg)$/,
    loader: "url-loader",
    query: {
      name: "static/media/[name].[hash:8].[ext]",
    },
  })
  return config
}
