import { UserAddOutlined } from "@ant-design/icons"
import { Button, Checkbox, Form, Input, Space, Typography } from "antd"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { REGISTER_PATHNAME } from "../router"
import styles from "./Login.module.scss"

const { Title } = Typography
const USENAME_KEY = "USERNAME"
const PASSWORD_KEY = "PASSWORD"
function rememberUser(username: string, password: string) {
    localStorage.setItem(USENAME_KEY, username)
    localStorage.setItem(PASSWORD_KEY, password)
}
function deleteUserFromStorage() {
    localStorage.removeItem(USENAME_KEY)
    localStorage.removeItem(PASSWORD_KEY)
}
function getUserInfoFromStorage() {
    return {
        username: localStorage.getItem(USENAME_KEY),
        password: localStorage.getItem(PASSWORD_KEY)
    }
}
function Login() {
    const [form] = Form.useForm()
    useEffect(() => {
        const { username, password } = getUserInfoFromStorage()
        form.setFieldsValue({ username, password })
    }, [])
    const onFinish = (values) => {
        const { username, password, remember } = values
        if (remember) {
            rememberUser(username, password)
        } else {
            deleteUserFromStorage()
        }
    }
    return (
        <div className={styles.container}>
            <div>
                <Space>
                    <Title level={2}>
                        <UserAddOutlined />
                    </Title>
                    <Title level={2}>注册新用户</Title>
                </Space>
            </div>
            <div>
                <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} onFinish={onFinish} initialValues={{ remember: true }}
                    form={form}>
                    <Form.Item label="用户名" name="usename" rules={[{ required: true, message: "请输入用户名" }, { type: "string", min: 5, max: 20, message: "长度在5-20之间" }, { pattern: /^\w+$/, message: "只能是数字字母下划线" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入密码" }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 16 }} name="remember" valuePropName="checked">
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button type="primary" htmlType="submit">登录</Button>
                        <Link to={REGISTER_PATHNAME}></Link>
                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}
export default Login