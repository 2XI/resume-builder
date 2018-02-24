import React, { Component } from 'react'
import style from './board.css'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'

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
                <div className={ style.menue }>菜单</div>
                <div className={ style.fragment }>内容片段</div>
                <textarea onChange={ this.handleChange } className={ style.editor }></textarea>
                <div className={ style.test }><ReactMarkdown source={ this.state.input } /></div>
            </div>
        )
    }
}

export default connect((state) => ({ input: state.input }), { getMd })(Board);