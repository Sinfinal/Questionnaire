import type { QuestionTextareaPropsType } from "./interface"
import { QuestionTextareaDefaultProps } from "./interface"
import { Typography, Input } from "antd"
const { Paragraph } = Typography
function QuestionTextarea(props: QuestionTextareaPropsType) {
    const { title, placeholder } = { ...QuestionTextareaDefaultProps, ...props }

    return <div>
        <Paragraph strong>{title}</Paragraph>
        <div>
            <Input placeholder={placeholder}></Input>
        </div>
    </div>

}
export default QuestionTextarea