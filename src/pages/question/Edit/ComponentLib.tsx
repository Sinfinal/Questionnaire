import { componentConfGroup, type ComponentConfType } from "../../../components/QuestionComponents"
import { Typography } from "antd"
import styles from "./ComponentLib.module.scss"
import { useDispatch } from "react-redux"
import type { Dispatch } from "@reduxjs/toolkit"
import { addComponent } from "../../../store/componentsReducer/index.ts"
import { nanoid } from "@reduxjs/toolkit"

const { Title } = Typography
function genComponent(c: ComponentConfType, dispatch: Dispatch) {
    const { title, type, Component, defaultProps } = c
    function handlerClick() {
        dispatch(
            addComponent({
                fe_id: nanoid(),
                title,
                type,
                props: defaultProps,
            })
        )
    }
    return (
        <div key={type} className={styles.wrapper} onClick={handlerClick}>
            <div className={styles.component}>
                <Component />
            </div>
        </div>
    )
}
function Lib() {
    const dispatch = useDispatch()
    return (
        <div>
            {componentConfGroup.map((group, index) => {
                const { groupId, groupName, components } = group
                return (
                    <div key={groupId}>
                        <Title
                            level={3}
                            style={{ fontSize: "16px", marginTop: index > 0 ? "20px" : "0" }}
                        >
                            {groupName}
                        </Title>
                        <div>{components.map(c => genComponent(c, dispatch))}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default Lib