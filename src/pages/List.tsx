import styles from "./List.module.scss"
import {useState} from "react"
const rawQuestionList=[
     {
                    id: 'q1',
                    title: '问卷1',
                    isPublished: false,
                    isStar: false,
                    answerCount: 5,
                    createAt: '3月10日 13:23',
                },
                {
                    id: 'q2',
                    title: '问卷2',
                    isPublished: true,
                    isStar: false,
                    answerCount: 5,
                    createAt: '3月10日 13:23',
                },
                {
                    id: 'q3',
                    title: '问卷3',
                    isPublished: false,
                    isStar: false,
                    answerCount: 5,
                    createAt: '3月10日 13:23',
                },
                {
                    id: 'q4',
                    title: '问卷4',
                    isPublished: true,
                    isStar: true,
                    answerCount: 8,
                    createAt: '3月11日 09:15',
                },
                {
                    id: 'q5',
                    title: '问卷5',
                    isPublished: false,
                    isStar: false,
                    answerCount: 0,
                    createAt: '3月12日 16:40',
                },

]
function List(){
    const [questionList, setQuestionList] = useState(rawQuestionList)
    return(
        <>
        {/*上*/}
        <div></div>
        {/*中*/}
        <div></div>
        {/*下*/}
        <div></div>
        </>
    )
}
export default List