const webpack = require('webpack');
//const cleanWebpackPlugin = require('clean-webpack-plugin');
const config =require('./webpack.config');

module.exports = {
    ...config,
    plugins: [
        //new cleanWebpackPlugin(),
        ...config.plugins
    ],
};
