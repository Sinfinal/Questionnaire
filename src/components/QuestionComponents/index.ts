import QuestionInputConf,{type QuestionInputPropsType } from "./QuestionInput";
import type { QuestionParagraphPropsType } from "./QuestionParagraph";
import QuestionParagraphConf from "./QuestionParagraph";
import QuestionTitleConf,{ type QuestionTitlePropsType } from "./QuestionTitle";
import QuestionInfoConf,{type QuestionInfoPropsType} from "./QuestionInfo"
import QuestionTextareaConf,{type QuestionTextareaPropsType} from "./QuestionTextarea"
import QuestionRadioConf,{type QuestionRadioPropsType} from "./QuestionRadio"
import QuestionCheckboxConf,{type QuestionCheckboxPropsType} from "./QuestionCheckbox"
import type { FC } from "react";

//各个组件的prop type
export type ComponentPropsType=QuestionInputPropsType&QuestionTitlePropsType&QuestionParagraphPropsType&QuestionInfoPropsType&QuestionTextareaPropsType&QuestionRadioPropsType&QuestionCheckboxPropsType
export type ComponentConfType={
    title:string
    type:string
    Component:FC<ComponentPropsType>
    PropComponent:FC<ComponentPropsType>
    defaultProps:ComponentPropsType
}
const componentConfList:ComponentConfType[]=[QuestionInputConf,QuestionTitleConf,QuestionParagraphConf,QuestionInfoConf,QuestionTextareaConf,QuestionRadioConf,QuestionCheckboxConf]

export const componentConfGroup=[
    {
        groupId:"textGroup",
        groupName:"文本显示",
        components:[QuestionTitleConf,QuestionParagraphConf,QuestionParagraphConf],
    },
    {
        groupId:"inputGroup",
        groupName:"用户输入",
        components:[QuestionInputConf,QuestionTextareaConf]
    },
    {
        groupId:"chooseGroup",
        groupName:"用户选择",
        components:[QuestionRadioConf,QuestionCheckboxConf]
    }
]
    
export function getComponentConfByType(type:string){
    return componentConfList.find(c=>c.type===type)
}