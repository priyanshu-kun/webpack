const path = require("path");

module.exports = {
    entry: "./src/index.js",
    // change to dev or prod mode
    mode: "development",
    // show code not in eval
    devtool: "none",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
}