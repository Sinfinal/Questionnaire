import { FormOutlined } from "@ant-design/icons"
import { Space, Typography } from "antd"
import { Link } from "react-router-dom"
import useGetUserInfo from "../hooks/useGetUserInfo"
import styles from "./Logo.module.scss"
import { useEffect, useState } from "react"
const { Title } = Typography
function Logo() {
    const {username}=useGetUserInfo()

    const [pathname,setPathname]=useState("/")
    useEffect(()=>{
        if (username){
            setPathname()
        }
    },[username])
    return (
        <div className={styles.container}>
            <Link to="/">
                <Space>
                    <Title>
                        <FormOutlined />
                    </Title>
                    <Title>
                        老哥问卷
                    </Title>
                </Space>
            </Link>
        </div>
    )
}
export default Logo