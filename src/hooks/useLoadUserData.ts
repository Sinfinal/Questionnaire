import { useEffect,useState } from "react"
import useGetUserInfo from "./useGetUserInfo"
import { useDispatch } from "react-redux"
import { useRequest } from "ahooks"
import { getUserInfoService } from "../service/user"
import { loginReducer } from "../store/userReducer"
function useLoadUserData(){
    const dispatch = useDispatch()
    const {username} =useGetUserInfo()
    const [waitingUserData,setWaitingUserData]=useState(!username)
    const {run }=useRequest(getUserInfoService,{
        manual:true,
        onSuccess(result){
            const {username,nickname}=result
            dispatch(loginReducer({username,nickname}))
        },
        onFinally(){
            setWaitingUserData(false)
        }
    })
    useEffect(()=>{
        if (username){
            return
        }
        run()
    },[username])
    //ajax加载完用户信息后，放在redux中，不用返回
    return {waitingUserData}
}
export default useLoadUserData