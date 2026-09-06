import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer"
import type { UserStateType } from "./userReducer"
import componentsReducer,{type ComponentsStateType} from "./componentsReducer/index.ts"
export type StateType={
    user:UserStateType
    components:ComponentsStateType
}
export default configureStore({
    reducer:{
        user:userReducer,
        component:componentsReducer
    },
}) 