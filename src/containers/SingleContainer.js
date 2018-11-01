import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreator'
import Single from '../components/Single'
import { bindActionCreators } from 'redux'


class SingleContainer extends Component{
    render(){
        return(
            <Single {...this.props} />
        )
    }
}


export default connect(
    state => ({
        posts: state.posts,
        comments: state.comments,
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)(SingleContainer)