import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'

import Fragment from 'components/Fragment/Fragment'
import Menue from 'components/Menue/Menue'

import { setMd } from "actions/input"

import { dealScroll, forbidenCTRL_S } from "../../util"

import style from './board.css'

class Board extends Component {
    componentDidMount() {
        forbidenCTRL_S()
    }
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.props.setMd(e.target.value)
        dealScroll()
    }
    render() {
        const input = this.props.txt.input
        return (
            <div className={ style.board }>
                <Menue />
                <Fragment />
                <textarea id="editor" value={ input } onChange={ this.handleChange } className={ style.editor }></textarea>
            </div>
        )
    }
}

export default connect((state) => ({ txt: state.input }), { setMd })(Board);