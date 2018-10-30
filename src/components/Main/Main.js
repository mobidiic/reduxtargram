import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Main.scss'
import ClassNames from 'classnames/bind'

const cx=ClassNames.bind(styles)

class Main extends Component{
    render(){
        const { children } = this.props
        return(
            <div className={cx('main__title')}>
                <h1>
                    <Link to="/">Reduxtargram</Link>
                </h1>
                {children}
            </div>
        )
    }
}

export default Main