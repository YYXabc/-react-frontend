import React,{Component} from 'react';
import {Input, Button, Row} from 'antd';
import getApiOpts from '../../servers';
import './login.css';
export default class Login extends Component{
    state = {
        pass: "",
        account: ""
    }
    onChangeInput = (e) => {
        if(e.currentTarget.name === "pass") {
            this.setState({
                pass: e.currentTarget.value
            })
        }else {
            this.setState({
                account: e.currentTarget.value
            })
        }
    }
    submit = () => {
        const {account, pass} = this.state;
        getApiOpts('login',{account , pass}).then((res) =>{
            console.log(res);
        });
    }
    render() {
        return(
            <div className="con">
                <div className='login-div'>
                    <Row className='login-row'>
                        <h1 className='login-title'>超市管理系统</h1>
                    </Row>
                    <Row className='login-row'>
                        <Input size="large" placeholder="输入账户" onChange={this.onChangeInput} name="account"></Input>
                    </Row>
                    <Row className='login-row'>
                        <Input size="large" placeholder="输入密码" onChange={this.onChangeInput} name="pass"></Input>
                    </Row>
                    <Row className='login-row'>
                        <Button size="large" type="primary" onClick={this.submit}>登陆</Button>
                    </Row>
                </div>
            </div>
        )
    }
}