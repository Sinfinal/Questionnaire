import type { ComponentInfoType, ComponentsStateType } from ".";

export function getNextSelectedId(fe_id:string,componentList:ComponentInfoType[]){
    const visibleComponentList=componentList.filter(c=>!c.isHidden)
    const index=visibleComponentList.findIndex(c=>c.fe_id===fe_id)
    
    if(index<0){
        return ""
    }
    const length=visibleComponentList.length
    if (length<=1){
        return ""
    }
    if(index+1===length){
        return visibleComponentList[index-1].fe_id
    }
    return visibleComponentList[index+1].fe_id

}
export function insertNewComponent(draft:ComponentsStateType,newComponent:ComponentInfoType){
    const {selectedId,componentList}=draft
    const index=componentList.findIndex(c=>c.fe_id===selectedId)
    if(index<0){
        draft.componentList.push(newComponent)
    }else{
        draft.componentList.splice(index+1,0,newComponent)
    }
    draft.selectedId=newComponent.fe_id
}