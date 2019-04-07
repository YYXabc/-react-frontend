import React, {Component} from 'react';
import RaMenu from '../../components/layout/RaMenu/';
class Page extends Component {
    render() {
        return (
            <h1>饮料</h1>
        )
    }
}
export default class Drinks extends Component {
    render() {
        return (
            <RaMenu components={Page}/>
        )
    }
}