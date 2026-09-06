import { Layout, Spin } from 'antd';
import { Outlet } from "react-router-dom";
import Logo from '../components/Logo';
import styles from "./MainLayout.module.scss";
import UserInfo from '../components/UserInfo';
import useLoadUserData from '../hooks/useLoadUseData';
const { Header, Footer, Content } = Layout;
function MainLayout() {
    const {waitingUserData}=useLoadUserData()
    return (
        <Layout>
            <Header className={styles.header}>
                <div className={styles.left}><Logo /></div>
                <div className={styles.right}>
                    <UserInfo></UserInfo>
                </div>
            </Header>
            <Layout className={styles.main}>
                <Content >
                    {waitingUserData?<div style={{textAlign:"center",marginTop:"60px"}}><Spin/></div>:<Outlet />}
                    
                </Content>
            </Layout>

            <Footer className={styles.footer}>老哥问卷 &copy;2023-present.Created by 老哥</Footer>
        </Layout>
    )
}
export default MainLayout