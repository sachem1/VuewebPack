var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var merge = require('webpack-merge'); //用来合并两个config.js
var webpackBaseConfig = require('./webpack.dev.config.js');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//清空基本配置的插件列表
webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '/dist/',
        filename: '[name].[hash].js'
    },
    plugins: [
        new ExtractTextPlugin({
            // 提取css,并重命名为带有20位hash值的唯一文件
            filename: '[name].[hash].css',
            allChunks: true

        }),
        //定义当前node环境为生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        //提取模板,并保存入口html文件
        new HtmlwebpackPlugin({
            filename: './index_prod.html',
            template: './index.ejs', //动态设置静态资源的路径和文件名
            inject: false
        }),
        new VueLoaderPlugin()
    ],
    //压缩
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    },
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true
                    }
                }
            }),
        ]
    }
})