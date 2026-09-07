import QuestionInputConf,{type QuestionInputPropsType } from "./QuestionInput";
import QuestionTitleConf,{ type QuestionTitlePropsType } from "./QuestionTitle";
import type { FC } from "react";

//各个组件的prop type
export type ComponentPropsType=QuestionInputPropsType&QuestionTitlePropsType
export type ComponentConfType={
    title:string
    type:string
    Component:FC<ComponentPropsType>
    PropComponent:FC<ComponentPropsType>
    defaultProps:ComponentPropsType
}
const componentConfList:ComponentConfType[]=[QuestionInputConf,QuestionTitleConf]

export const componentConfGroup=[
    {
        groupId:"textGroup",
        groupName:"文本显示",
        components:[QuestionTitleConf],
    },
    {
        groupId:"inputGroup",
        groupName:"用户输入",
        components:[QuestionInputConf]
    }
]
    
export function getComponentConfByType(type:string){
    return componentConfList.find(c=>c.type===type)
}