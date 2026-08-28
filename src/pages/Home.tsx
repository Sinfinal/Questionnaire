import { Button, Typography } from "antd"
import { useNavigate } from "react-router-dom"
import { MANAGE_INDEX_PATHNAME } from "../router"
import styles from "./Home.module.scss"
const { Title, Paragraph } = Typography
function Home() {
    const nav = useNavigate()
    // function clickHandler() {
    //     // nav("/login")
    //     nav({
    //         pathname: "/login",
    //         search: "b=1"
    //     })
    // }

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <Title>问卷调查 | 在线投票</Title>
                <Paragraph>已累计创建问卷100份，发布问卷90份，收到答卷980份</Paragraph>
                <div>
                    <Button type="primary" onClick={() => nav(MANAGE_INDEX_PATHNAME)}>
                        开始使用
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Home