const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // TODO 用于将 CSS 导出到单独文件
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");  // TODO 用于做源代码压缩

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [
            "...",
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader", // TODO css-loader 用于加载 CSS 文件，转化 CSS 为 CommonJS
                        options: {
                            modules: {  // 默认正则：/\.module.\w+$/i.test(filename) or /\.icss\.\w$+/i.test(filename)
                                auto: true,
                                localIdentName: "[hash:base64:8]"   // 自定义输出 CSS类名 => hash 名称
                            }
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [["autoprefixer"]],
                            },
                        },
                    },
                    "sass-loader",
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    "MiniCssExtractPlugin.loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [["autoprefixer"]],
                            },
                        },
                    },
                    "less-loader",
                ],
                include: /node_modules/,
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/css/[hash:8].css",
        }),
    ],
});
