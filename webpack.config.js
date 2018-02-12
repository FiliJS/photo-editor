const path = require("path"),
      webpack = require("webpack"),
      ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "./src/app.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name]-bundle.js",
        publicPath: "dist"
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
    devServer: {
        contentBase: path.join(__dirname, ""),
        compress: true,
        hot: true,
        stats: "errors-only",
        port: 9000
    },
    plugins: [
        new ExtractTextPlugin("css/[name]-bundle.css"),
        new webpack.HotModuleReplacementPlugin()
    ]
};