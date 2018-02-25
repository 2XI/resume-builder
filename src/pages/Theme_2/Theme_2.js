import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'

import { setMd } from "actions/input"

import style from './theme_2.css'

const input = '# This is a header\n\nAnd this is a paragraph'


class Theme_2 extends Component {
    constructor() {
        super()
    }
    render() {
        const input = this.props.txt.input;
        return (
            <div id="element-to-print" className={ style.preview_cont }>
                <ReactMarkdown source={ input } />
            </div>
        )
    }
}

export default connect((state) => ({ txt: state.input }), { setMd })(Theme_2);

