import React, {Component} from 'react';
import { Tabs, Icon } from 'antd';
import './style.css';
const TabPane = Tabs.TabPane;
export default class Page extends Component {
    render() {
        const {tabs, ...restProps} = this.props;
        const tabsColumns = [
            {
                Component: tabs['Fruits'],
                key: "1",
                icon: "apple",
                title: "水果",
            },
            {
                Component: tabs['Cigarette'],
                key: "2",
                icon: "shopping-cart",
                title: "香烟",
            },
            {
                Component: tabs['Snacks'],
                key: "3",
                icon: "gift",
                title: "零食",
            }
        ]
        return (
            <Tabs 
                defaultActiveKey="1" 
                size="Large" 
                type="card"
                className="tabs"
            >
                {
                    tabsColumns.map((item, index) => {
                        const {Component} = item;
                        return (
                            <TabPane tab={<span><Icon type={item.icon} />{item.title}</span>} key={item.key}>
                                <Component/>
                            </TabPane>
                        )
                    })
                }
          </Tabs>
        )
    }
}


// import React, {Component} from 'react';
// import { Table } from 'antd';

// export default class Cigarette extends Component {
//     render() {
//         const dataSource = [{
//             key: '1',
//             name: 'AAA',
//             age: 32,
//             address: '西湖区湖底公园1号'
//         }, {
//             key: '2',
//             name: '胡彦祖',
//             age: 42,
//             address: '西湖区湖底公园1号'
//         }];
          
//         const columns = [{
//             title: '姓名',
//             dataIndex: 'name',
//             key: 'name',
//         }, {
//             title: '年龄',
//             dataIndex: 'age',
//             key: 'age',
//         }, {
//             title: '住址',
//             dataIndex: 'address',
//             key: 'address',
//         }];
          
//         return (

//             <Table
//                 dataSource={dataSource}
//                 columns={columns}
//             />
//         )
//     }
// }