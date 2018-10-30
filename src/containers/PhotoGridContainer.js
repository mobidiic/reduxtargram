import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreator'
import PhotoGrid from '../components/PhotoGrid'
import { bindActionCreators } from 'redux'


class PhotoGridContainer extends Component{
    render(){
        const { posts, comments } = this.props
        return(
            <PhotoGrid posts={posts} comments={comments} {...this.props} />
        )
    }
}


export default connect(
    state => ({
        posts: state.posts,
        comments: state.comments,
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)(PhotoGridContainer)