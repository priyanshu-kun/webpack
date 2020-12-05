const path = require("path");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");
const cleanWebpagePlugin = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new cleanWebpagePlugin()]
});