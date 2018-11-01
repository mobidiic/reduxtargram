import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Main extends Component{
    render(){
        const { children } = this.props
        return(
            <div className='main-title'>
                <h1>
                    <Link to="/">Reduxtargram</Link>
                </h1>
                <h2>
                    <Link to="/view/BAcJeJrQca9" ><button>test</button></Link>
                </h2>
                {children}
            </div>
        )
    }
}

export default Main