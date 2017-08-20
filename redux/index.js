/**
 * 入口文件，用于webpack 打包
 */
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducers/index'
import App from './components/App'

let store = createStore(todoApp);
store.subscribe(() =>
    console.log(store.getState())
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);