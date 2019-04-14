import React, {Component} from 'react';
import { Table } from 'antd';

export default class Cigarette extends Component {
    render() {
        const dataSource = [{
            key: '1',
            name: 'AAA',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }];
          
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        }];
        return (
            
            <Table
                dataSource={dataSource}
                columns={columns}
            />
        )
    }
}