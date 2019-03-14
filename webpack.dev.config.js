var path = require('path');
//导入插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件

var config = {
        entry: {
            main: './main'
        },
        output: {
            path: path.join(__dirname, './dist'),
            publicPath: '/dist/',
            filename: 'main.js'
        },
        module: {
            rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            }, {
                test: /\.(png | jpg | gif)$/i,
                use: [{
                    loader: 'url-loader'
                }]
            }
        ],
            plugins: [
                new ExtractTextPlugin("main.css"),
                new VueLoaderPlugin(),
                new HtmlWebpackPlugin({
                    filename: './index.html',
                })
            ]
        };

        module.exports = config;