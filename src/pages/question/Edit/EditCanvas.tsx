
import styles from "./EditCanvas.module.scss"

import { Spin } from "antd"
import useGetComponentInfo from "../../../hooks/useGetComponentInfo"
import { getComponentConfByType } from "../../../components/QuestionComponents"
import { changeSelectedId, type ComponentInfoType } from "../../../store/componentsReducer/index.ts"
import { useDispatch } from "react-redux"
import classNames from "classnames"
type PropsType={
    loading:boolean

}
function genComponent(componentInfo:ComponentInfoType){
    const {type,props}=componentInfo
    const componentConf=getComponentConfByType(type)
    if (componentConf==null)return null
    const {Component}=componentConf
    return <Component {...props}/>
}
function EditCanvas(props:PropsType){
    const { loading }=props
    const {componentList}=useGetComponentInfo()
    const dispatch=useDispatch()

    function handleClick(event:MouseEvent,id:string){
        event.stopPropagation()
        dispatch(changeSelectedId(id))
    }
    if (loading){
        return <div style={{textAlign:"center",marginTop:"24px"}}>
            <Spin></Spin>
        </div>
    }
    return <div className={styles.canvas}>
        {componentList.map(c=>{
            const {fe_id}=c
            const wrapperDefaultClassName=styles['component-wrapper']
            const selectedClassName=styles.selected
            const wrapperClassname=classNames({
                [wrapperDefaultClassName]:true,
                [selectedClassName]:fe_id===selectedId,
            })
            return<div key={fe_id} className={wrapperClassname} onClick={()=>handleClick(e,fe_id)}>
                <div className={styles.component}>
                    {genComponent(c)}
                </div>
            </div>
        })}
        {/* <div className={styles['component-wrapper']}>
            <div className={styles.component}>
            <QuestionTitle/>
            </div>
        </div>
        <div className={styles["component-wrapper"]}>
            <div className={styles.component}>
            <QuestionInput/>
            </div>
        </div> */}
    </div>
}
export default EditCanvas