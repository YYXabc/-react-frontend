import React,{Component} from 'react';
import {Input, Button, Row} from 'antd';
import './login.css';
export default class Login extends Component{
    componentDidMount() {
        // let request = new XMLHttpRequest();
        // let url = "https://yangyuxingblog.cn/testYun/phpServ/test.php?state=a";
        // request.open('GET', url);
        // request.onreadystatechange = () => {
        //     if (request.readyState === 4) {
        //         if (request.status === 200 || request.status === 304) {
        //             console.log(request.response);
        //         }
        //     }    
        // }
        // request.send();
    }
    render() {
        return(
            <div className="con">
                <div className='login-div'>
                    <Row className='login-row'>
                        <h1 className='login-title'>超市管理系统</h1>
                    </Row>
                    <Row className='login-row'>
                        <Input size="large" placeholder="输入账户"></Input>
                    </Row>
                    <Row className='login-row'>
                        <Input size="large" placeholder="输入密码"></Input>
                    </Row>
                    <Row className='login-row'>
                        <Button size="large" type="primary">登陆</Button>
                    </Row>
                </div>
            </div>
        )
    }
}