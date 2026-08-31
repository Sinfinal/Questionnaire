import { Empty, Spin, Typography } from "antd"

import { useTitle } from "ahooks"
import ListSearch from "../../components/ListSearch"
import QuestionCard from "../../components/QuestionCard"
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData"
import styles from "./Common.module.scss"


const { Title } = Typography
function Star() {
    useTitle("老哥问卷-星标问卷")
    const { data = {}, loading } = useLoadQuestionListData({ isStar: true })
    const { list = [], total = 0 } = data
    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>星标问卷</Title>
                </div>
                <div className={styles.right}>
                    <ListSearch />
                </div>
            </div>
            {/*中*/}
            <div className={styles.content}>
                {
                    loading && (<div style={{ textAlign: "center" }}><Spin /></div>)
                }
                {!loading && list.length === 0 && <Empty description="暂无数据" />}
                {list.length > 0 && list.map((question: any) => {
                    const { _id } = question
                    return <QuestionCard key={_id} {...question} />
                })}
            </div>
            {/*下*/}
            <div className={styles.footer}>分页</div>
        </>
    )
}
export default Star