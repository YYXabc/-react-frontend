import React, {Component} from 'react';
import RaMenu from '../../components/layout/RaMenu/';
class Page extends Component {
    render() {
        return (
            <h1>家电</h1>
        )
    }
}
export default class DomesticAppliancefrom extends Component {
    render() {
        return (
            <RaMenu components={Page}/>
        )
    }
}