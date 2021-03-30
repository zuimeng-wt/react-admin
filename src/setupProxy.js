//服务器地址跨域文件 
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(createProxyMiddleware([process.env.REACT_APP_API],{
        target:process.env.REACT_APP_BASE_URL,//配置你要请求的服务器地址
        changeOrigin:true,
        pathRewrite:{
            [`${process.env.REACT_APP_API}`]: ""
            // "^/devApi":""
        }
    }))
    // app.use(proxy("/manage/api",{
    //     target:"http://admintest.happymmall.com:7000",
    //     changeOrigin:true,
    // }))
}