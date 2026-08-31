import { useTitle } from "ahooks"
import { Spin, Typography } from "antd"

import ListSearch from "../../components/ListSearch"
import QuestionCard from "../../components/QuestionCard"

import useLoadQuestionListData from "../../hooks/useLoadQuestionListData"
import styles from "./Common.module.scss"
const { Title } = Typography
function List() {
    const { data = {}, loading } = useLoadQuestionListData()
    const { list = [], total = 0 } = data
    // const [list,setList]=useState([])
    // const [total,setTotal]=useState(0)
    // useEffect(()=>{
    //     async function load(){
    //         const data=await getQuestionListService()
    //         const {list=[],total=0}=data
    //         setList(list)
    //         setTotal(total)
    //     }
    // },[])
    useTitle("老哥问卷，懂你的问卷")
    return (
        <>
            {/*上*/}
            <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>我的问卷</Title>
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
                {!loading && list.length > 0 && list.map((question: any) => {
                    const { _id } = question
                    return <QuestionCard key={_id} {...question} />
                })}
            </div>
            {/*下*/}
            <div className={styles.footer}>loadmore...上滑加载更多</div>
        </>
    )
}
export default List