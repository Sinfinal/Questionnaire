import { ExclamationCircleOutlined } from "@ant-design/icons"
import { Button, Empty, Modal, Space, Table, Tag, Typography } from "antd"
import { useState } from "react"
import styles from "./Common.module.scss"
import ListSearch from "../../components/ListSearch"
const { confirm } = Modal
const rawQuestionList = [
    {
        _id: 'q1',
        title: '问卷1',
        isPublished: false,
        isStar: false,
        answerCount: 5,
        createdAt: '3月10日 13:23',
    },
    {
        _id: 'q2',
        title: '问卷2',
        isPublished: true,
        isStar: false,
        answerCount: 5,
        createdAt: '3月10日 13:23',
    },
    {
        _id: 'q3',
        title: '问卷3',
        isPublished: false,
        isStar: false,
        answerCount: 5,
        createdAt: '3月10日 13:23',
    },


]

const { Title } = Typography
function Trash() {
    function del() {
        confirm(
            {
                title: "确认彻底删除问题?",
                icon: <ExclamationCircleOutlined />,
                content: "删除以后不可以找回",
                onOk: () => alert(`删除${JSON.stringify(selectedIds)}`)
            }
        )
    }
    const [questionList] = useState(rawQuestionList)
    const [selectedIds, SetSelectedIds] = useState<string[]>([])
    const tableColumns = [
        {
            title: "标题",
            dataIndex: "title",
        },
        {
            title: "是否发布",
            dataIndex: "isPublished",
            render: (isPublished: boolean) => {
                return isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>
            }
        },
        {
            title: "答卷",
            dataIndex: "answerCount"
        },
        {
            title: "创建时间",
            dataIndex: "createdAt"
        }

    ]
    const TableElem = <>
        <div style={{ marginBottom: "16px" }}>
            <Space>
                <Button type="primary" disabled={selectedIds.length === 0}>恢复</Button>
                <Button danger disabled={selectedIds.length === 0} onClick={() => del()}>彻底删除</Button>
            </Space>
        </div>
        <Table dataSource={questionList} columns={tableColumns} pagination={false} rowKey={q => q._id} rowSelection={{ type: "checkbox", onChange: selectedRowKeys => { SetSelectedIds(selectedRowKeys as string[]) } }} />
    </>

    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>回收站</Title>
                </div>
                <div className={styles.right}>
                    <ListSearch/>
                </div>
            </div>
            {/*中*/}
            <div className={styles.content}>
                {questionList.length === 0 && <Empty description="暂无数据" />}
                {questionList.length > 0 && TableElem}
            </div>
            {/*下*/}
            <div className={styles.footer}>分页</div>
        </>
    )
}
export default Trash