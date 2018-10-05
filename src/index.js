import React from 'react'
import { render } from 'react-dom'

window.React = React

render(
    <div>
        hi
    </div>,
    document.getElementById('react-container')
)