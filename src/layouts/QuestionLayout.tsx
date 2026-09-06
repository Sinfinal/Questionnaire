import {Outlet} from "react-router-dom"
import useLoadUserData from "../hooks/useLoadUseData"


import { Spin } from "antd"
function QuestionLayout(){
    const {waitingUserData}=useLoadUserData()
    return (
        <>
        <div>QuestionLayout header</div>
        <div>
             {waitingUserData?<div style={{textAlign:"center",marginTop:"60px"}}><Spin/></div>:<Outlet />}
        </div>
        <div>QuestionLayout footer</div>
        </>
    )
}
export default QuestionLayout