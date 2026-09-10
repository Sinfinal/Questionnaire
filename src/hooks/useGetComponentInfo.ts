import { useSelector } from "react-redux";
import type { ComponentsStateType } from "../store/componentsReducer/index.ts";
import { type StateType } from "../store";
function useGetComponentInfo(){
    const components=useSelector<StateType>(state=>state.components) as ComponentsStateType
    const {componentList=[],selectedId,copiedComponent}=components
    const selectedComponent=componentList.find((c=>c.fe_id===selectedId))
    return {
        componentList,
        selectedId,
        selectedComponent,
        copiedComponent
    }
}
export default useGetComponentInfo