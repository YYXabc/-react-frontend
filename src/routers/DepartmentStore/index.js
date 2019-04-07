import React, {Component} from 'react';
import RaMenu from '../../components/layout/RaMenu/';
class Page extends Component {
    render() {
        return (
            <h1>日用百货</h1>
        )
    }
}
export default class DepartmentStore extends Component {
    render() {
        return (
            <RaMenu components={Page}/>
        )
    }
}