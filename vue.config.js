'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 9080

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : './'

module.exports = {
  publicPath: BASE_URL,
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(options => {
        options[0].template = './src/assets/index.html'
        options[0].favicon = './src/assets/favicon.ico'
        return options
      })
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '_c': resolve('src/components')
      }
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: /node_modules/,
            name: 'vendor',
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100
          },
          common: {
            chunks: 'all',
            test: /[\\/]src[\\/]js[\\/]/,
            name: 'common',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60
          },
          styles: {
            name: 'styles',
            test: /\.(sa|sc|c)ss$/,
            chunks: 'all',
            enforce: true
          },
          runtimeChunk: {
            name: 'manifest'
          }
        }
      }
    }
  }
}
