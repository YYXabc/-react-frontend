import React, {Component} from 'react';
import RaMenu from '../../components/layout/RaMenu/';

class Page extends Component {
    render() {
        return (
            <h1>食品</h1>
        )
    }
}
 
export default class Food extends Component {
    render() {
        return (
            <RaMenu components={Page}/>
        )
    }
}