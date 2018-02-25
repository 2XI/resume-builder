import React, { Component } from 'react'
import style from './board.css'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'

import Fragment from 'components/Fragment/Fragment'
import Menue from 'components/Menue/Menue'

import { setMd } from "actions/input"

class Board extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.props.setMd(e.target.value)
    }
    render() {
        const input = this.props.txt.input
        return (
            <div className={ style.board }>
                <Menue />
                <Fragment />
                <textarea value={ input } onChange={ this.handleChange } className={ style.editor }></textarea>
            </div>
        )
    }
}

export default connect((state) => ({ txt: state.input }), { setMd })(Board);