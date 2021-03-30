//账号api

//引用拦截器和响应器
import service from '../utils/request'

//登录接口
export function Login(data){
    return service.request({
        url:"/login/",
        method:"post",
        data:data ,  //post
        // psrams:data, //get
    })
}

//登录验证码接口
export function GetCode(data){
    return service.request({
        url:"/getSms/",
        method:"post",
        data:data ,  //post
        // psrams:data, //get
    })
}