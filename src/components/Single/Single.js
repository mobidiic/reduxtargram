import React from 'react'
import styles from './Single.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Single = () => (
  <div className={cx('single__photo')}>
    Single
  </div>
);

export default Single