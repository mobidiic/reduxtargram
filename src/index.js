import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { history } from './store'
import App from './containers/App'
import SingleContainer from './containers/SingleContainer'
import PhotoGridContainer from './containers/PhotoGridContainer'
import '../stylesheets/globals.scss'

window.React = React

render(
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Switch>
                    <Route exact path="/" component={SingleContainer}/>
                    <Route path="/view/:postId" component={SingleContainer} />
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.getElementById('react-container')
)