import React, {Component} from 'react';
import Page from './components/index';
import RaMenu from '../../components/layout/RaMenu';
import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './model'

class Food extends Component {
    render() {
        const {...restProps} = this.props;
        return (
            <RaMenu components={Page} {...restProps}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Food);