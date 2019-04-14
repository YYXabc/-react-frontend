import React, {Component, Fragment} from 'react';
import { Menu, Icon, Button, Layout} from 'antd';
import { connect } from 'react-redux';
import RaHeader from './RaHeader';
import siderData from '../../../static/RaSider';
import {mapStateToProps, mapDispatchToProps} from './model'
import  './RaMenu.css';
const {Sider, Content} = Layout;

class RaMenu extends Component {
    state = {
        defaultSelectedKeys: window.location.hash.split("#")[1].split("/")[0] + window.location.hash.split("#")[1].split("/")[1]
    }
    goto = (path) => {
        window.location.hash = `#${path}`;
    }
    componentWillMount () {
        if(true) {//this.props.login
            let hash = window.location.hash.split("#")[1];
            let defaultSelectedKeys = hash === "/" ? "/" : `/${hash.split("/")[1]}`;
            this.setState({
                defaultSelectedKeys
            })
        }else {
            window.location.hash = "#/login"; 
        }

    }
    render() {
        const Ccomponents = this.props.components ;
        const {changeCollapsed, collapsed, user} = this.props;
        const {...restProps} = this.props;
        return (
            <Fragment>
                <RaHeader theme="light" userName={user}>Test</RaHeader>
                <Layout>
                    <Sider className="sider" collapsed={collapsed}>
                        <Menu
                            mode="vertical"
                            theme="dark"
                            style={{height:'100%'}}
                            inlineCollapsed={collapsed}
                            defaultSelectedKeys={[this.state.defaultSelectedKeys]}
                        >
                            <div className="sider-button-div">
                                <h2 style={{color: "white", height:'100%'}}>{collapsed ? '' : '导航菜单'}</h2>
                                <Button type="primary" onClick={changeCollapsed} 
                                    style={{border: '1px solid rgb(255,255,255)', fontSize: "150%", background: 'rgb(0,21,41)'}}>
                                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                                </Button>
                            </div>
                            {
                                siderData.map((item, index) => {
                                    return (
                                        <Menu.Item key={item.path} onClick={this.goto.bind(this, item.path)}>
                                            <Icon type={item.icon}/>
                                            <span>
                                                {item.title}
                                            </span>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{background:"rgb(255,255,255)"}}>
                        <Content>
                            <Ccomponents {...restProps}/>
                        </Content>
                    </Layout>
                </Layout>
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RaMenu);