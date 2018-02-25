import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './nav.css'

export default class Nav extends Component {
    render() {
        return (
            <div className={ style.theme_box }>
                <div className={ style.theme_bt }><Link to="/theme_1">主题1</Link></div>
                <div className={ style.theme_bt }><Link to="/theme_2">主题2</Link></div>
            </div>
        )
    }
}