import { useTitle,useDebounceFn, useRequest } from "ahooks"
import { Spin, Typography ,Empty} from "antd"
import { useSearchParams } from "react-router-dom"
import ListSearch from "../../components/ListSearch"
import QuestionCard from "../../components/QuestionCard"
import { useEffect, useState ,useRef,useMemo} from "react"
import styles from "./Common.module.scss"
import { LIST_PAGE_SIZE, LIST_SEARCH_PARAM_KEY } from "../../constant"
import { getQuestionListService } from "../../service/question"
const { Title } = Typography
function List() {
    useTitle("老哥问卷，懂你的问卷")
    const [started,setStarted]=useState(false) //是否已经开始加载
    const [list,setList]=useState([])
    const [page,setPage]=useState(1)
    const [total,setTotal]=useState(0)
    const [loading,setLoading]=useState(true)
    const [searchParams]=useSearchParams()
    const haveMoreData=total>list.length
    const keyword=searchParams.get(LIST_SEARCH_PARAM_KEY)||""
    //真正加载
    useEffect(()=>{
        setStarted(false)
        setPage(1)
        setList([])
        setTotal(0)

    },[keyword])
    const {run:load,loading}=useRequest(async()=>{
        const data=await getQuestionListService({
           page:page,
            pageSize:LIST_PAGE_SIZE,
            keyword
        })
        return data
    },{
        manual:true,
        onSuccess(result){
            const {list:l=[],total=0}=result
            setList(list.concat(l))
            setTotal(total)
            setPage(page+1)
        }
    })
    //尝试去触发加载-防抖
    const containerRef=useRef<HTMLDivElement>(null)
    const {run:tryLoadMore}=useDebounceFn(()=>{
        const elem=containerRef.current
        if (elem==null)return 
        const domReact =elem.getBoundingClientRect()
        if (domReact==null)return 
        const {bottom} =domReact
        if (bottom<=document.body.clientHeight){
            load()
            setStarted(true)
        }
    },{
        wait:1000
    })
    //页面加载或者url参数发生变化时
    useEffect(()=>{
        tryLoadMore()
    },[searchParams])
    //当页面滚动，要尝试触发加载
    useEffect(()=>{
        if (haveMoreData){
            window.addEventListener("scroll",tryLoadMore)

        }
        return ()=>{
            window.removeEventListener("scroll",tryLoadMore)
        }
    },[searchParams,haveMoreData])
    const LoadMoreContentElem=useMemo(()=>{
        if(!started||loading)return <Spin/>
        if (total===0)return <Empty description="暂无数据"/>
        if (!haveMoreData)return <span>没有更多了</span>
        return <span>开始加载下一页</span>

    })
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

                {list.length > 0 && list.map((question: any) => {
                    const { _id } = question
                    return <QuestionCard key={_id} {...question} />
                })}
            </div>
            {/*下*/}
            <div className={styles.footer}>
                <div ref={containerRef}>
                    {LoadMoreContentElem}
                </div>
            </div>
        </>
    )
}
export default List