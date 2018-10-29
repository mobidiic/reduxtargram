import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import post from './post'
import comment from './comment'

const reducer = combineReducers({
    post,
    comment,
    router: routerReducer
})

export const reducer