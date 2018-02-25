import React, { Component } from 'react'
import style from './board.css'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'

import Fragment from 'components/Fragment/Fragment'
import Menue from 'components/Menue/Menue'

import { getMd } from "actions/input"

class Board extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            input: '# This is a header\n\nAnd this is a paragraph'
        }
    }
    handleChange(e) {
        this.setState({
            input: e.target.value
        })
        this.props.getMd(e.target.value)
    }
    render() {
        return (
            <div className={ style.board }>
                <Menue />
                <Fragment />
                <textarea onChange={ this.handleChange } className={ style.editor }></textarea>
            </div>
        )
    }
}

export default connect((state) => ({ input: state.input }), { getMd })(Board);