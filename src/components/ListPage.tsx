import { Pagination } from "antd"
import { useSearchParams ,useNavigate,useLocation} from "react-router-dom"
import { LIST_PAGE_PARAM_KEY, LIST_PAGE_SIZE, LIST_PAGE_SIZE_PARAM_KEY } from "../constant"
type PropsType={
    total:number
}
function ListPage(props:PropsType){
    const {total}=props
    const [searchParams]=useSearchParams()
<<<<<<< HEAD
    const nav=useNavigate()
    const {pathname}=useLocation()
    useEffect(()=>{
        setCurrent(parseInt(searchParams.get(LIST_PAGE_PARAM_KEY)||"")||1)
        setPageSize(parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY)||"")||LIST_PAGE_SIZE)
    },[searchParams])
    
=======
    const current=parseInt(searchParams.get(LIST_PAGE_PARAM_KEY)||"")||1
    const pageSize=parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY)||"")||LIST_PAGE_SIZE
    const nav=useNavigate()
    const {pathname}=useLocation()
>>>>>>> f87d544b02327462c1b2bdb9b35c88ae5f4927b2
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