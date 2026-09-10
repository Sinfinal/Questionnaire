import axios from "axios";
import {message} from "antd"
import { getToken } from "../utils/user-token";

const instance =axios.create({
    timeout:10*1000,
})
//request 拦截：每次请求带上token
instance.interceptors.request.use(
    config=>{
        config.headers["Authorization"]=`Bearer ${getToken()}`
        return config
    },
    error=>Promise.reject(error)
)
//response 拦截：统一处理errno和msg
instance.interceptors.response.use(
    res=>{
        const resData=(res.data||{})as ResType
        const {errno,data,msg}=resData
        if (errno!==0){
            if (msg){
                message.error(msg)
            }
            throw new Error(msg)
        }
        // axios 响应拦截器返回的是处理后的数据，而非 AxiosResponse，需要绕过类型
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return data as any
    }

)
export default instance
export type ResType={
    errno:number
    data?:ResDataType
    msg?:string
}
export type ResDataType={
    // API 返回解构后的数据，字段不确定，保持宽松
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key:string]:any
}