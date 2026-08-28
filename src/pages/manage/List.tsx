import styles from "./List.module.scss"
import {useState} from "react"
import QuestionCard from "../../components/QuestionCard"
const rawQuestionList=[
     {
                    _id: 'q1',
                    title: '问卷1',
                    isPublished: false,
                    isStar: false,
                    answerCount: 5,
                    createdAt: '3月10日 13:23',
                },
                {
                    _id: 'q2',
                    title: '问卷2',
                    isPublished: true,
                    isStar: false,
                    answerCount: 5,
                    createdAt: '3月10日 13:23',
                },
                {
                    _id: 'q3',
                    title: '问卷3',
                    isPublished: false,
                    isStar: false,
                    answerCount: 5,
                    createdAt: '3月10日 13:23',
                },
                {
                    _id: 'q4',
                    title: '问卷4',
                    isPublished: true,
                    isStar: true,
                    answerCount: 8,
                    createdAt: '3月11日 09:15',
                },
                {
                    _id: 'q5',
                    title: '问卷5',
                    isPublished: false,
                    isStar: false,
                    answerCount: 0,
                    createdAt: '3月12日 16:40',
                },

]
function List(){
    const [questionList, setQuestionList] = useState(rawQuestionList)
    return(
        <>
        {/*上*/}
        <div className={styles.header}>
            <div className={styles.left}>
                <h3 style={{background:"yellow"}}>我的问卷</h3>
            </div>
            <div className={styles.right}>
                （搜索）
            </div>
        </div>
        {/*中*/}
        <div className={styles.content}>
            {questionList.map(question=>{
                const{_id}=question
                return <QuestionCard key={_id} {...question}/>
            })}
        </div>
        {/*下*/}
        <div className={styles.footer}>（footer）</div>
        </>
    )
}
export default List