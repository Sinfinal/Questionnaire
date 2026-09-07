import { componentConfGroup ,ComponentConfType} from "../../../components/QuestionComponents"
import { Typography } from "antd"
import styles from "./ComponentLib.module.scss"
const {Title}=Typography
function genComponent(c:ComponentConfType){
    const {title,type,Component}=c
    function handlerClick(){

    }
    return <div className={styles.wrapper} onClick={()=>handlerClick}>
        <div className={styles.component}>
        <Component/>
        </div>

    </div>
}
function Lib(){

    return <div >
        {componentConfGroup.map((group,index)=>{
            const {groupId,groupName,components}=group
            return <div key={groupId} >
                <Title level={3} style={{fontSize:"16px",marginTop:index>0?"20px":"0"}}>{groupName}</Title>
                <div>{components.map(c=>genComponent(c))}</div>
                </div>
        })}
    </div>
}
export default Lib