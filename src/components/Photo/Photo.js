import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import styles from './Photo.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class Photo extends Component {
  render() {
    const { comments, posts } = this.props
    return (
      <figure className={'grid-figure'}>
        <div className={'grid-photo-wrap'}>
          {/* <Link to={`/view/${[posts.id]}`}>
            <img src={posts.display_src} alt={posts.caption} className={cx('grid-photo')} />
            <CSSTransitionGroup transitionName={like} transitionEnterTimeout={500} transitionLeaveTimeout={500} >
              <span key={posts.likes} className='likes-heart'>{posts.likes}</span>
            </CSSTransitionGroup>
          </Link> */}
        </div>
      </figure>
    )
  }
}

export default Photo