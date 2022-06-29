const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development", // 开发模式
    devServer: {
        hot: true, // 热更新
        open: true, // 编译完自动打开浏览器
        compress: false, // 关闭gzip压缩
        port: 7878, // 开启端口号
        historyApiFallback: true, // 支持 history 路由重定向到 index.html 文件
    },
    module: {
        // 插件的执行顺序从右到左
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    "style-loader", // TODO style-loader 将 css 注入到 HTML 的内联样式
                    {
                       loader: "css-loader", // TODO css-loader 用于加载 CSS 文件，转化 CSS 为 CommonJS
                       options: {
                           modules: {  // 默认正则：/\.module\.\w+$/i.test(filename) or /\i.css\.\w+$/i.test(filename)
                               auto: true,
                               localIdentName: "[path][name]__[local]" // TODO 自定义输出 CSS类名 => hash 函数
                           }
                       }
                    },
                    {
                        loader: "postcss-loader",   // TODO postcss 用于处理 CSS 兼容性
                        options: {
                            postcssOptions: {
                                plugins: [["autoprefixer"]],    // TODO autoprefixer 用于自动根据兼容需求增加 CSS 属性的前缀
                            },
                        },
                    },
                    "sass-loader",  // TODO sass 主要是用于支持 “CSS 编程”   sass-loader 会将 .scss 后缀文件编译成 CSS
                ],
                // 排除 node_modules 目录
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
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
    stats: "errors-only", // Webpack 在编译的时候只输出错误日志，终端更清爽
});
