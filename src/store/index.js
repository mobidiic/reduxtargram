import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import reducer from '../reducers'
import comments from '../../data/comments'
import posts from '../../data/posts'

const initialState = {
    comments,
    posts,
}


const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const history = syncHistoryWithStore(createHistory(), store)

export default store