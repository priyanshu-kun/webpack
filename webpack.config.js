const path = require("path");

module.exports = {
    entry: "./src/index.js",
    // change to dev or prod mode
    mode: "development",
    // show code not in eval

    // devtool: "none",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
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
        ],
    }
}