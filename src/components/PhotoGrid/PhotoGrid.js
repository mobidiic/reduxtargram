import React from 'react'
import styles from './PhotoGrid.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const PhotoGrid = () => (
  <div className={cx('photo-grid')}>
    PhotoGrid
  </div>
);

export default PhotoGrid