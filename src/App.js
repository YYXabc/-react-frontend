import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
const routers = require('./routers').default(store);


class App extends Component {
    
    render() {
        return (
            <Provider store={store}>
                <HashRouter store={store}>{renderRoutes(routers)}</HashRouter>
            </Provider>
        );
    }
}
export default App;