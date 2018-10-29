import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { history } from './store'
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'
import '../stylesheets/globals.scss'

window.React = React

render(
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Switch>
                    <Route path="/" component={PhotoGrid}></Route>
                    <Route path="/view/:postId" component={Single}></Route>
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.getElementById('react-container')
)