import type { QuestionInputPropsType } from "./interface"
import { QuestionInputDefaultProps } from "./interface"
import { Typography, Input } from "antd"
const { Paragraph } = Typography
function QuestionInput(props: QuestionInputPropsType) {
    const { title, placeholder } = { ...QuestionInputDefaultProps, ...props }

    return <div>
        <Paragraph strong>{title}</Paragraph>
        <div>
            <Input placeholder={placeholder}></Input>
        </div>
    </div>

}
export default QuestionInput