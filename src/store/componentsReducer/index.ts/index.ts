import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import {type  ComponentPropsType } from "../../../components/QuestionComponents"
import produce from "immer"
export type ComponentInfoType={
    fe_id:string
    type:string
    title:string
    props:ComponentPropsType
}
export type ComponentsStateType={
    selectedId:string
    componentList:Array<ComponentInfoType>
}
const INIT_STATE:ComponentsStateType={
    selectedId:"",
    componentList:[],

}
export const componentsSlice=createSlice({
    name:"components",
    initialState:INIT_STATE,
    reducers:{
        resetComponents:(state:ComponentsStateType,action:PayloadAction<ComponentsStateType>)=>{
            return action.payload
        },
        changeSelectedId:produce((draft:ComponentsStateType,action:PayloadAction<string>)=>{
            draft.selectedId=action.payload

        })
        addComponent:produce((draft:ComponentsStateType,action:PayloadAction<ComponentInfoType>)=>{

        })
    }
})

export const {resetComponents,changeSelectedId}=componentsSlice.actions
export default componentsSlice.reducer