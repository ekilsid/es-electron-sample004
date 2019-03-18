const webpack = require("webpack");
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const copyWebpackPlugin = require('copy-webpack-plugin')

const baseConfig = {
    module: {
        rules:[
            {
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                options: {
                        presets: [
                            '@babel/preset-env', // ES2018 を ES5 に変換
                            '@babel/react' // React の JSX を解釈
                        ]
                }              
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    node: {
        __dirname: false,
    } 
};

// mainプロセス用
const mainConfig = merge(baseConfig, {
  entry : {
      main  : './app/main.js',
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
  },
  target: 'electron-main',
  plugins: [
        new copyWebpackPlugin([
            {
            from: './app/index.html',
            toType: 'file'
            },
        ])
    ], 
});

// rendererプロセス用
const rendererConfig = merge(baseConfig, {
  entry : {
      entry : './app/renderer.js',
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
  },
  target: 'electron-renderer',
});

module.exports = [mainConfig, rendererConfig]

