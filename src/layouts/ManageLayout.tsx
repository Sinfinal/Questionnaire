import {Outlet} from "react-router-dom"
import styles from "./ManageLayout.module.scss"
function ManageLayout(){
    return (
        <div>
        <div>ManageLayout left</div>
        <div>
            <Outlet/>
        </div>
        </div>
    )
}
export default ManageLayout