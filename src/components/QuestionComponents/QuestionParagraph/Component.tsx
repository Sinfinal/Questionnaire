import { Typography } from "antd";
import { QuestionParagraphDefaultProps, type QuestionParagraphPropsType } from "./interface";
const {Paragraph}=Typography
function Component(props:QuestionParagraphPropsType){
    const {text="",isCenter=false}={...QuestionParagraphDefaultProps,...props}
    const textList=text.split("\n")
    return <Paragraph style={{textAlign:isCenter?"center":"start",marginBottom:"0"}}>
    {textList.map((t,index)=>(<span key={index}>{index>0&&<br/>}{t}</span>))}
    </Paragraph>
} 
export default Component