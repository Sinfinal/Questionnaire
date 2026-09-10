
import { Form, Input,Checkbox } from "antd";
import { type QuestionCheckboxPropsType } from "./interface";
function PropComponent(props:QuestionCheckboxPropsType){
    const {title,isVertical,list=[],onChange,disabled}=props
    const [form]=Form.useForm()
    function handleValuesChange(){
        if (onChange){
            onChange(form.getFieldsValue())
        }
    }
    return (
        <Form layout="vertical" form={form} initialValues={{title,isVertical,list}} disabled={disabled} onValuesChange={handleValuesChange}>
            <Form.Item label="标题" name="title"  rules={[{required:true,message:"请输入标题"}]}>
                <Input/>
            </Form.Item>
            <Form.Item name="isVertical" valuePropName="checked"> 
                <Checkbox>竖向排列</Checkbox>
            </Form.Item>
        </Form>
    )
}
export default PropComponent