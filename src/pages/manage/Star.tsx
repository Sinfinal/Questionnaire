import { Empty, Typography } from "antd"
import { useState } from "react"
import QuestionCard from "../../components/QuestionCard"
import styles from "./Common.module.scss"

const rawQuestionList = [
    {
        _id: 'q1',
        title: '问卷1',
        isPublished: false,
        isStar: true,
        answerCount: 5,
        createdAt: '3月10日 13:23',
    },
    {
        _id: 'q2',
        title: '问卷2',
        isPublished: true,
        isStar: true,
        answerCount: 5,
        createdAt: '3月10日 13:23',
    },
    {
        _id: 'q3',
        title: '问卷3',
        isPublished: false,
        isStar: true,
        answerCount: 5,
        createdAt: '3月10日 13:23',
    },


]
const { Title } = Typography
function Star() {
    const [questionList] = useState(rawQuestionList)
    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>星标问卷</Title>
                </div>
                <div className={styles.right}>
                    （搜索）
                </div>
            </div>
            {/*中*/}
            <div className={styles.content}>
                {questionList.length === 0 && <Empty description="暂无数据" />}
                {questionList.length > 0 && questionList.map(question => {
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