import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers';

import Layout from './Layout';
import Login from './pages/login';

const store = createStore(
    combineReducers( {
        reducer,
        routing : routerReducer
    } )
);

ReactDOM.render( <Provider store={ store }>
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Route path="/" component={ Login } />
            </Route>
        </Switch>
    </BrowserRouter>
    </Provider>, document.getElementById( 'root' )
);
