const path = require("path")

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/, /[A-Z]*\.story\.js/],
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    include: [path.resolve(__dirname, "../src")],
    enforce: "pre",
  })
  return config
}
