import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withCookies} from 'react-cookie'
import {Layout, Menu} from 'antd';
import axios from 'axios'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    LogoutOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined
} from '@ant-design/icons';

import {Keys} from "../const/Const"
import UserContainer from "./UserContainer";
import LoginContainer from "./LoginContainer";

const {Header, Sider, Content} = Layout;

class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: null,
            loading: false
        };
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                selectedKey: Keys.User,
                loading: true
            })
        }, 1000);
    }

    selectMenu = (e) => {
        this.setState({
            selectedKey: e.key
        })
    }

    logOut = () => {
        this.props.cookies.remove("ACCESS_COOKIE_NAME", {
            path: '/',
            domain: '',
            httpOnly: false
        })

        axios.defaults.headers.common['Authorization'] = '';
    }

    render() {
        if (!this.props.cookies.cookies["ACCESS_COOKIE_NAME"]) {
            return <LoginContainer/>
        }

        return (
            !this.state.loading ?
                <div style={{textAlign: 'center', paddingTop: '50%'}}>
                    <div className="loader"></div>
                </div>
                :
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={true}
                        collapsedWidth={50}
                        style={{
                            overflow: 'auto',
                            width: '40vh',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}
                    >
                        <Menu theme="dark" mode="inline"
                              defaultSelectedKeys={[this.state.selectedKey]}
                              inlineIndent={10}
                              style={{width: '100%'}}>
                            <Menu.Item key={Keys.User}
                                       icon={<UserOutlined/>}
                                       style={{padding: 0, margin: 0, textAlign: 'center'}}
                                       onClick={this.selectMenu}>
                            </Menu.Item>
                            <Menu.Item key={Keys.Camera}
                                       icon={<VideoCameraOutlined/>}
                                       style={{padding: 0, margin: 0, textAlign: 'center'}}
                                       onClick={this.selectMenu}>
                            </Menu.Item>
                            <Menu.Item key={Keys.Upload}
                                       icon={<UploadOutlined/>}
                                       style={{padding: 0, margin: 0, textAlign: 'center'}}
                                       onClick={this.selectMenu}>
                            </Menu.Item>
                            <Menu.Item key={Keys.Chart}
                                       icon={<BarChartOutlined/>}
                                       style={{padding: 0, margin: 0, textAlign: 'center'}}
                                       onClick={this.selectMenu}>
                            </Menu.Item>
                            <Menu.Item key={Keys.Cloud}
                                       icon={<CloudOutlined/>}
                                       style={{padding: 0, margin: 0, textAlign: 'center'}}
                                       onClick={this.selectMenu}>
                            </Menu.Item>
                            <Menu.Item key={Keys.Appstore}
                                       icon={<AppstoreOutlined/>}
                                       style={{padding: 0, margin: 0, textAlign: 'center'}}
                                       onClick={this.selectMenu}>
                            </Menu.Item>
                            <Menu.Item key={Keys.People}
                                       icon={<TeamOutlined/>}
                                       style={{padding: 0, margin: 0, textAlign: 'center'}}
                                       onClick={this.selectMenu}>
                            </Menu.Item>
                            <Menu.Item key={Keys.Logout}
                                       icon={<LogoutOutlined/>}
                                       style={{padding: 0, margin: 0, textAlign: 'center'}}
                                       onClick={this.logOut}>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{marginLeft: 50, height: window.innerHeight}}>
                        <Header/>
                        <Content style={{overflow: 'auto', padding: 10}}>
                            {
                                this.state.selectedKey === Keys.User ?
                                    <UserContainer/> : null
                            }
                            {
                                this.state.selectedKey === Keys.Camera ?
                                    <UserContainer/> : null
                            }
                            {
                                this.state.selectedKey === Keys.Upload ?
                                    <UserContainer/> : null
                            }
                            {
                                this.state.selectedKey === Keys.Chart ?
                                    <UserContainer/> : null
                            }
                            {
                                this.state.selectedKey === Keys.Cloud ?
                                    <UserContainer/> : null
                            }
                            {
                                this.state.selectedKey === Keys.Appstore ?
                                    <UserContainer/> : null
                            }
                            {
                                this.state.selectedKey === Keys.People ?
                                    <UserContainer/> : null
                            }
                        </Content>
                    </Layout>
                </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => ({})

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(DashboardContainer))