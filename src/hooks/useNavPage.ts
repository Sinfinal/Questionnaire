import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import useGetUserInfo from "./useGetUserInfo"
import { isLoginOrRegister, isNoNeedUserInfo, LOGIN_PATHNAME, MANAGE_INDEX_PATHNAME } from "../router"

function useNavPage(waitingUserData: boolean) {
    const { username } = useGetUserInfo()
    const { pathname } = useLocation()
    const nav = useNavigate()

    useEffect(() => {
        // 等待用户数据加载完成前不处理跳转
        if (waitingUserData) return

        if (username) {
            // 已登录
            if (isLoginOrRegister(pathname)) {
                nav(MANAGE_INDEX_PATHNAME)
            }
            return
        }

        // 未登录
        if (isNoNeedUserInfo(pathname)) {
            return
        } else {
            nav(LOGIN_PATHNAME)
        }
    }, [waitingUserData, username, pathname, nav])
}
export default useNavPage
