import styles from "./index.module.scss"
import useLoadQuestionData from "../../../hooks/useLoadQuestionData"
import EditCanvas from "./EditCanvas"
import { useDispatch } from "react-redux"
import { changeSelectedId } from "../../../store/componentsReducer/index.ts"
import LeftPanel from "./LeftPanel.tsx"
function Edit() {
    const dispatch=useDispatch()
    const {loading}=useLoadQuestionData()
    function clearSelectedId(){
        dispatch(changeSelectedId(""))
    }
    return (
        <div className={styles.container}>
            <div style={{backgroundColor:"#fff"}}>Header</div>
            <div className={styles["content-wrapper"]}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <LeftPanel/>
                    </div>
                    <div className={styles.main} onClick={clearSelectedId}>
                        <div className={styles["canvas-wrapper"]}>
                             <div style={{height:"900px"}}>
                                <EditCanvas loading={loading}/>
                             </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        right
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default Edit