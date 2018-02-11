const path = require("path");
      ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "./src/app.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name]-bundle.js",
        publicPath: "./dist/"
    },
    devServer: {
        port: 9000
    },
    module:{
        rules: [
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    "use": ["css-loader", "stylus-loader"]
                })
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: "es2015"
                    }
                }
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 100000,
                        name: "images/[name].[ext]"
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name]-bundle.css")
    ]
};