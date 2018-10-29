import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'
import '../stylesheets/globals.scss'

window.React = React

render(
    <BrowserRouter>
        <Main>
            <Switch>
                <Route path="/" component={PhotoGrid}></Route>
                <Route path="/view/:postId" component={Single}></Route>
            </Switch>
        </Main>
    </BrowserRouter>,
    document.getElementById('react-container')
)