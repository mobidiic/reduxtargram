import React, { Component } from 'react'
import './Single.scss'
import Comments from '../Comments'
import Photo from '../Photo'


class Single extends Component{
  render(){
    // const { postId } = this.props.match.params
    // const i = this.props.posts.findIndex( (post) => post.code === postId)
    // const post = this.props.posts[i]
    // const postComments = this.props.comments[postId] || []
    return(
      <div className="single-photo">
        <Photo i={"BAcJeJrQca9"} post={ {
    "code": "BAcJeJrQca9",
    "caption": "Snow! ⛄️🌨❄️ #lifewithsnickers",
    "likes": 59,
    "id": "1160844458347054781",
    "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
  }} {...this.props} />
        <Comments postComments={[{"BAcyDyQwcXX":[
    {
      "text":"Wes. WE should have lunch.",
      "user": "jdaveknox"
    },
    {
      "text":"#adults",
      "user": "jdaveknox"
    },
    {
      "text":"@jdaveknox yes!",
      "user": "wesbos"
    },
    {
      "text":"😍 love Hamilton!",
      "user": "willowtreemegs"
    }
  ]}]} />
      </div>
    )
  }
}


export default Single