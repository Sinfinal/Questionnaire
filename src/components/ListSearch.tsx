import { Input } from "antd"
import { useEffect, useState, type ChangeEvent } from "react"
import { useLocation, useNavigate ,useSearchParams} from "react-router-dom"
import { LIST_SEARCH_PARAM_KEY } from "../constant"
const { Search } = Input

function ListSearch() {
    const [value, setValue] = useState("")
    const nav = useNavigate()
    const { pathname } = useLocation()
    const [searchParams]=useSearchParams()
    useEffect(()=>{
        const curVal=searchParams.get(LIST_SEARCH_PARAM_KEY)||""
        setValue(curVal)
    },[searchParams])
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }
    function handleSearch(value: string) {
        nav({
            pathname,
            search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
        })
    }
    return (
        <Search placeholder="输入关键字" value={value} onChange={handleChange} onSearch={handleSearch} size="large" style={{ width: "200px" }} allowClear />
    )
}
export default ListSearch