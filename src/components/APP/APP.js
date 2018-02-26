import React, {Component} from 'react'

import Nav from 'components/Nav/Nav'
import Board from 'components/Board/Board'
import getRouter from 'router/router'

import style from "./app.css"

export default class App extends Component {
    render() {
        return (
            <div>
                <Board/>
                <Nav/>
                <div id="preview" className={ style.preview }>
                    { getRouter() }
                </div>
            </div>
        )
    }
}