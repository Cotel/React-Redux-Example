import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import reducers from './rootReducer'
import AppRoutes from './scenes'

const middleware = [thunk]
const store = compose(applyMiddleware(...middleware)(createStore)(reducers))

ReactDOM.render(
    <Provider store={store}>
        <Router
            history={browserHistory}
            onUpdate={() => window.scrollTo(0,0)}
        >
            {AppRoutes}
        </Router>
    </Provider>
    , document.getElementById('root'))
