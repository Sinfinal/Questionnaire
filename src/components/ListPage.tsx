import { Pagination } from "antd"
import { useEffect, useState } from "react"
import { useSearchParams ,useNavigate,useLocation} from "react-router-dom"
import { LIST_PAGE_PARAM_KEY, LIST_PAGE_SIZE, LIST_PAGE_SIZE_PARAM_KEY } from "../constant"
type PropsType={
    total:number
}
function ListPage(props:PropsType){
    const [current,setCurrent]=useState(1)
    const [pageSize,setPageSize]=useState(LIST_PAGE_SIZE)
    const {total}=props
    const [searchParams]=useSearchParams()
    useEffect(()=>{
        setCurrent(parseInt(searchParams.get(LIST_PAGE_PARAM_KEY)||"")||1)
        setPageSize(parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY)||"")||LIST_PAGE_SIZE)
    },[searchParams])
    const nav=useNavigate()
    const {pathname}=useLocation()
    function handlePageChange(page:number,pageSize:number){
        searchParams.set(LIST_PAGE_PARAM_KEY,page.toString())
        searchParams.set(LIST_PAGE_SIZE_PARAM_KEY,pageSize.toString())
        nav({
            pathname,
            search:searchParams.toString()
        })
    }
    return <Pagination current={current} pageSize={pageSize} total={total} onChange={handlePageChange}/>
}
export default ListPage