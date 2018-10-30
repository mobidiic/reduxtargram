import React, { Component } from 'react'
import styles from './PhotoGrid.scss'
import classNames from 'classnames/bind'
import Photo from '../Photo'

const cx = classNames.bind(styles)

class PhotoGrid extends Component{
  render(){
  return(
    <div className={cx('photo-grid')}>
        {this.props.posts.map((post, i)=> <Photo key={i} i={i} {...this.props} />)}
    </div>
  )}
};

export default PhotoGrid