// webpack.config.js
const path = require('path')

// 使用插件之前需要先加载对应的plugin
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    // 配置入口文件
    entry: path.resolve(__dirname, '../src/main.js'),
    // 配置输出文件
    output: {
    // 输出路径
        path: path.resolve(__dirname, '../dist'),
        // 输出文件名称
        filename: 'build.js'
    },

    // 模块，可以使用各种loader，比如css转换，图片压缩等
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }

        ]
    },
    // 插件，用于生成模板和其它功能
    plugins: [
        // 每次构建完成后先清理一遍dist目录
        new CleanWebpackPlugin(['../dist']),

        // 生成html文件到输入目录
        new HtmlWebpackPlugin({

            // 可以以src目录下的html源文件为模板
            template: './index.html',
            // 在目标目录下生成目标文件
            filename: './dist/index.html'
        }), new VueLoaderPlugin()
    ],
    // 可配置本地的webpack开发服务功能
    devServer: {}
}
