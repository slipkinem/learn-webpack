/**
 * Created by slipkinem on 2016/11/25.
 */
'use strict';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //入口文件  __dirname是当前文件的所在位置，所以连接要加 + /app
    entry: __dirname + "/app/main.js",
    output: {
        //打包后文件存放的地方
        path: __dirname + "/build",
        //打包后输出文件的文件名
        filename: '[name]-[hash].min.js'
    },
    /**
     * 配置生成的source-map
     * 选择值：
     * source-map:生成单独文件
     * cheap-module-source-map：不带映射的
     * eval-source-map: 有隐患，开发时用好
     * cheap-module-eval-source-map: 单独不带映射的，但是速度快
     */
    devtool: 'source-map',
    devServer: {
        contentBase: './public', //本地服务器加载时的文件夹
        colors: true, //终端彩色
        historyApiFallback: true,//不跳转
        inline: true //实时刷新
    },
    /**
     * 配置loader模块
     */
    module: {
        loaders: [
            {
                test: /\.json$/, //匹配loader处理文件的扩展名，正则（必须有）
                loader: 'json'  //loader的名字（必须）
                //include/exclude 必须/不处理的文件夹
                // query 额外的配置选项
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
                // query: {
                //  配置在.babelrc
                // }
            },
            {
                test: /\.css$/,
                //会改变所取得ID CLASS名字
                loader: ExtractTextWebpackPlugin.extract('style','css?modules!postcss') //css-loader 和 style-loader
            }
        ]
    },
    //依赖插件
    postcss: [
        require('autoprefixer')
    ],
    //插件
    plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."), //生成标识
        new HtmlWebpackPlugin({
            template: __dirname + "/app/tpl.html"
        }),
        //为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，
        // 并为它们分配最小的ID
        new webpack.optimize.OccurenceOrderPlugin(),
        //丑化js
        new webpack.optimize.UglifyJsPlugin(),
        // 分离css
        new ExtractTextWebpackPlugin("[name]-[hash].min.css")
    ]
};