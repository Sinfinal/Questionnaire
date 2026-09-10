import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { type ComponentPropsType } from "../../../components/QuestionComponents"
import { nanoid } from "@reduxjs/toolkit"
import { produce } from "immer"
import { getNextSelectedId, insertNewComponent } from "./utils"
import cloneDeep from "lodash.clonedeep"
export type ComponentInfoType={
    fe_id:string
    type:string
    title:string
    isHidden?:boolean
    isLocked?:boolean
    props:ComponentPropsType
}
export type ComponentsStateType={
    selectedId:string
    componentList:Array<ComponentInfoType>
    copiedComponent:ComponentInfoType|null
}
const INIT_STATE:ComponentsStateType={
    selectedId:"",
    componentList:[],
    copiedComponent:null
}
export const componentsSlice = createSlice({
    name: "components",
    initialState: INIT_STATE,
    reducers: {
        resetComponents: (_state: ComponentsStateType, action: PayloadAction<ComponentsStateType>) => {
            return action.payload
        },

        changeSelectedId:(state:ComponentsStateType,action:PayloadAction<string>)=>{
            state.selectedId=action.payload
        },
        addComponent: (state: ComponentsStateType, action: PayloadAction<ComponentInfoType>) => {
            const newComponent = action.payload
            const { selectedId, componentList } = state
            const index = componentList.findIndex(c => c.fe_id === selectedId)
            if (index < 0) {
                state.componentList.push(newComponent)
            } else {
                state.componentList.splice(index + 1, 0, newComponent)
            }
            state.selectedId = newComponent.fe_id
        },
        changeComponentProps: (state: ComponentsStateType, action: PayloadAction<{ id: string, newProps: ComponentPropsType }>) => {
            const { id, newProps } = action.payload
            const curComp = state.componentList.find(c => c.fe_id === id)
            if (curComp) {
                curComp.props = {
                    ...curComp.props,
                    ...newProps,
                }
            }
        },
        removeSelectedComponent:produce(
            (draft:ComponentsStateType)=>{
                const {componentList=[],selectedId:removedId}=draft
                const newSelectedId=getNextSelectedId(removedId,componentList)
                draft.selectedId=newSelectedId
                const index=componentList.findIndex(c=>c.fe_id===removedId)
                componentList.splice(index,1)
            }
        ),
        changeComponentHidden:produce(
            (draft:ComponentsStateType,action:PayloadAction<{fe_id:string,isHidden:boolean}>)=>{
                const {componentList=[]}=draft
                const {fe_id,isHidden}=action.payload
                let newSelectedId=""
                if(isHidden){
                    newSelectedId=getNextSelectedId(fe_id,componentList)
                }else{
                    newSelectedId=fe_id
                }
                draft.selectedId=newSelectedId
                
                const curComp=componentList.find(c=>c.fe_id===fe_id)
                if(curComp){
                    curComp.isHidden=isHidden
                }
            }
        ),
        toggleComponentLocked:produce(
            (draft:ComponentsStateType,action:PayloadAction<{fe_id:string}>)=>{
                const {fe_id}=action.payload
            const curComp=draft.componentList.find(c=>c.fe_id===fe_id)
               if(curComp){
                curComp.isLocked=!curComp.isLocked
            }
            }
        ),
        copySelectedComponent:produce((draft:ComponentsStateType)=>{
            const {selectedId,componentList=[]}=draft
            const selectedComponent=componentList.find(c=>c.fe_id===selectedId)
            if (selectedComponent===null)return
            draft.copiedComponent=cloneDeep(selectedComponent)
        }),
        pasteCopiedComponent:produce(
            (draft:ComponentsStateType)=>{
                const {copiedComponent}=draft
                if (copiedComponent==null)return 
                copiedComponent.fe_id=nanoid()
                insertNewComponent(draft,copiedComponent)
            }
        ),
        selectPrevComponent:produce((draft:ComponentsStateType)=>{
            const {selectedId,componentList}=draft
            const selectedIndex=componentList.findIndex(c=>c.fe_id===selectedId)
            if(selectedIndex<=0)return
            draft.selectedId=componentList[selectedIndex-1].fe_id
        }),
        selectNextComponent:produce((draft:ComponentsStateType)=>{
             const {selectedId,componentList}=draft
            const selectedIndex=componentList.findIndex(c=>c.fe_id===selectedId)
            if(selectedIndex<0)return
            if(selectedIndex+1===componentList.length)return
            draft.selectedId=componentList[selectedIndex+1].fe_id
        })
    }, 
})

export const {resetComponents,changeSelectedId,addComponent,changeComponentProps,removeSelectedComponent,changeComponentHidden,toggleComponentLocked,copySelectedComponent,pasteCopiedComponent,selectPrevComponent,selectNextComponent}=componentsSlice.actions
export default componentsSlice.reducer