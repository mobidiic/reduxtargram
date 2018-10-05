import React from 'react'
import { Link } from 'react-router'
import styles from './Main.scss'
import ClassNames from 'classnames/bind'

const cx=ClassNames.bind(styles)

const Main = () => {
    return(
        <div className={cx('main__title')}>
            <h1>
                <Link to="/">Reduxtargram</Link>
            </h1>
        </div>
    )
}

export default Main