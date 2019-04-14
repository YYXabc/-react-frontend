import React, {Component} from 'react';
import { Layout, Icon, Tooltip } from 'antd';
const {Header} = Layout;

export default class RaHeader extends Component {
    render() {
        return (
            <Header theme="light" className="header">
                <div className="header-left">
                    <h1 style={{color: 'white'}}>超市管理系统</h1>
                </div>
                <div className="header-right" >
                    <div style={{fontSize: "200%"}}>
                        <Tooltip title={this.props.userName}  >
                            <Icon type="user"/> 
                        </Tooltip>
                    </div>
                    <div style={{fontSize: "200%", marginLeft: "20px"}}>
                        <Tooltip title="后台管理"  >
                            <Icon type="bars" /> 
                        </Tooltip>
                    </div>
                </div>

            </Header>
        )
    }
}