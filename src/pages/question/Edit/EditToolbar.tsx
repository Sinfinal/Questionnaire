import { BlockOutlined, DeleteOutlined, EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons"
import {Button,Space, Tooltip} from "antd"
import { useDispatch} from "react-redux"
import { changeComponentHidden, copySelectedComponent, removeSelectedComponent, toggleComponentLocked } from "../../../store/componentsReducer/index.ts"
import useGetComponentInfo from "../../../hooks/useGetComponentInfo.ts"
function EditToolbar(){
    const dispatch=useDispatch()
    const {selectedId,selectedComponent,copiedComponent}=useGetComponentInfo()
    const {isLocked}=selectedComponent||{}
    function handleDelete(){
        dispatch(removeSelectedComponent())
    }
    function handleHidden(){
        dispatch(changeComponentHidden({fe_id:selectedId,isHidden:true}))
    }
    function handleLock(){
        dispatch(toggleComponentLocked({fe_id:selectedId}))
    }
    function handleCopy(){
        dispatch(copySelectedComponent())
    }
    function handlepaste(){
        dispatch(pasteSelectedComponent())
    }
    return (
    <Space>
        <Tooltip title="删除">
            <Button shape="circle" icon={<DeleteOutlined/>} onClick={handleDelete}>

        </Button>
        </Tooltip>
        <Tooltip title="隐藏">
            <Button shape="circle" icon={<EyeInvisibleOutlined/>} onClick={handleHidden}>

        </Button> 
        </Tooltip>
        <Tooltip title="锁定">
            <Button type={isLocked?"primary":"default"} shape="circle" icon={<LockOutlined/>} onClick={handleLock}>

        </Button> 
        </Tooltip>
        <Tooltip title="复制">
            <Button  shape="circle" icon={<LockOutlined/>} onClick={handleCopy}>
        </Button> 
        </Tooltip>
        <Tooltip title="粘贴">
            <Button disabled={copiedComponent==null} shape="circle" icon={<BlockOutlined/>} onClick={handlepaste}>
        </Button> 
        </Tooltip>
    </Space>
    )
}
export default EditToolbar