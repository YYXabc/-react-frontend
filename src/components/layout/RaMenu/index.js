import React, {Component} from 'react';
import { Menu, Icon, Button, Layout} from 'antd';
import { connect } from 'react-redux';
import Header from './RaHeader';
import siderData from '../../../static/RaSider';
import {mapStateToProps, mapDispatchToProps} from './model'
import  './RaMenu.css';
const {Sider, Content} = Layout;

class RaMenu extends Component {
    goto = (path) => {
        window.location.hash = `#${path}`;
    }
    render() {
        const Ccomponents = this.props.components ;
        const {changeCollapsed, collapsed} = this.props;
        return (
            <Layout>
                <Sider className="test" collapsed={collapsed} theme="light">
                    <Menu
                        mode="vertical"
                        theme="light"
                        style={{height:'100%'}}
                        inlineCollapsed={collapsed}
                    >
                        <Button type="primary" onClick={changeCollapsed}>
                            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                        </Button>
                        {
                            siderData.map((item, index) => {
                                return (
                                    <Menu.Item key={index} onClick={this.goto.bind(this, item.path)}>
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
                <Layout>
                    <Header theme="light">Test</Header>
                    <Content>
                        <Ccomponents/>
                    </Content>
                </Layout>

            </Layout>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RaMenu);