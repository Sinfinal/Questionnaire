import type { FC } from "react"
import useGetComponentInfo from "../../../hooks/useGetComponentInfo"
import { getComponentConfByType, type ComponentPropsType } from "../../../components/QuestionComponents"
import {changeComponentProps} from "../../../store/componentsReducer/index.ts"
import { useDispatch } from "react-redux"
const NoProp:FC=()=>{
    return <div style={{textAlign:"center"}}>未选中组件</div>
}
function ComponentProp(){

    const dispatch=useDispatch()
    const {selectedComponent}=useGetComponentInfo()
    if (selectedComponent==null)return <NoProp/>
    const{type,props,isLocked,isHidden} =selectedComponent
    const componentConf=getComponentConfByType(type)
    if (componentConf==null)return <NoProp/>
    const {PropComponent} =componentConf
    function changeProps(newProps:ComponentPropsType){
        if (selectedComponent==null)return 
        const{fe_id}=selectedComponent
        dispatch(changeComponentProps({id:fe_id,newProps}))
    }
    return <PropComponent {...props} onChange={changeProps} disabled={isLocked||isHidden}/>
}
export default ComponentProp