import React,{Component} from 'react';
import {Input, Button, Row, notification } from 'antd';
import getApiOpts from '../../servers';
import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './model'
import './login.css';
class Login extends Component{
    state = {
        pass: "",
        account: "",
        loading: false
    }
    getLoading  = (loading) => {
        this.setState({
            loading
        })
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

    gotoHomePage = () => {
        window.location.hash = "#/"; 
    } 
    submit = () => {
        const {account, pass} = this.state;
        const {getLoading, gotoHomePage} = this;
        const {login} = this.props;
        getLoading(true);
        getApiOpts('login',{account , pass}).then((res) =>{
            if(res.result) {
                notification.success({message:"登录成功/即将跳转回主页"});
                login(res.data.user);
                gotoHomePage()
            }else {
                notification.error({message:"登录失败/账号或密码错误"})
            }
            setTimeout(()=>{
                getLoading(false)
            },500);
        });
    }
    render() {
        console.log(this.props);
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
                        <Button size="large" type="primary" onClick={this.submit} loading={this.state.loading}>登陆</Button>
                    </Row>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);