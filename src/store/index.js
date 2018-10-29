import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHistory } from 'history/createBrowserHistory'

import reducer from '../reducers'
import comments from '../../data/comments'
import posts from '../../data/posts'

const initialState = {
    comments,
    posts,
}


const store = createStore(reducer, initialState)

export const history = syncHistoryWithStore(createHistory(), store)

export default store