import { Form,Input } from "antd";
import type { QuestionTextareaPropsType } from "./interface";
import { useEffect } from "react";
function PropComponent(props:QuestionTextareaPropsType){
    const {title,placeholder,disabled,onChange}=props
    const [form] = Form.useForm()
    useEffect(()=>{
        form.setFieldsValue({title,placeholder})
    },[title,placeholder])
    function handleValueChange(){
        if(onChange){
            onChange(form.getFieldsValue())
        }
    }
    return (
        <Form disabled={disabled} layout="vertical" initialValues={{title,placeholder}} form={form} onValuesChange={handleValueChange}>
            <Form.Item label="标题" name="title" rules={[{required:true,message:"请输入标题"}]}>
                <Input/>
            </Form.Item>
            <Form.Item label="Placeholder" name="placeholder" >
                <Input/>
            </Form.Item>
        </Form>
    )
}
export default PropComponent