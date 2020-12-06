const path = require("path");
const webpackHTMLPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    // change to dev or prod mode
    // mode: "development",
    // show code not in eval

    // devtool: "none",

    // output: {
    // [contentHash] is a hash string to main.js file for prevent hashing
    //     filename: "main.[contentHash].js",
    //     path: path.resolve(__dirname, "dist")
    // },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader', //3: inject into DOM
                    'css-loader', //2: convert CSS in commonJS
                    'sass-loader' //1: convert into CSS
                ],
            },
            {
                test: /\.html$/i,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ],
    },
    plugins: [new webpackHTMLPlugin({
        template: "./src/templete.html"
    })]
}