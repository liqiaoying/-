'use strict'

const path = require('path')
    // var proxyConfig = require('./proxyConfig')
module.exports = {
    dev: {
        // proxyTable: proxyConfig.proxy,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/api': { //将www.exaple.com印射为/apis
                // target: 'http://192.168.60.15:8080',  // 接口域名（changan）
                // target: 'http://192.168.60.16:8080',  // 接口域名（VN）
                // target: 'http://192.168.60.13:8080',  // 接口域名（mars）
                target: 'http://s1.test1.cp.com',
                // target: 'http://s1.test2.cp.com',
                // target: 'http://s1.test3.cp.com',
                secure: false, // 如果是https接口，需要配置这个参数
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': '/api' //需要rewrite的,
                }
            }
        },
        // env: require('./dev.env'),
        // host: '192.168.60.18', // 配置自己的IP，后端可直接访问我的本地
        // host: 'localhost',
        port: 9527,
        autoOpenBrowser: true,
        errorOverlay: true,
        notifyOnErrors: false,
        poll: false,
        useEslint: true,
        showEslintErrorsInOverlay: false,
        devtool: 'cheap-source-map',
        cssSourceMap: false
            // ,
            //     target: 'http://192.168.50.71/',
            //     filter(pathname, req) {
            //       console.info('firstProxy',req)
            //       const isApi = pathname.indexOf('/system-manger') == 0;
            //       const ret = isApi;
            //       return ret;
            //     },
            //     changeOrigin: true,
            // Various Dev Server settings
    },

    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: false,
        devtool: 'source-map',
        productionGzip: true,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report || false,
        generateAnalyzerReport: process.env.npm_config_generate_report || false
    }
}