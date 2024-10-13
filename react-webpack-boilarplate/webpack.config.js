const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { InspectorWebpackPlugin } = require('@modern-js/inspector-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: 'ts-loader', // TypeScript için ts-loader
                    },
                    {
                        loader: 'optimus/webpack-loader', // Kendi loader'ını kullanıyorsun
                    }
                ],
                exclude: /node_modules/, // node_modules dizinini dışla
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.css$/,
                loader: "css-loader",
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    plugins: [
        new InspectorWebpackPlugin({
            port: 3332,
            ignorePattern: /node_modules/
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
}
