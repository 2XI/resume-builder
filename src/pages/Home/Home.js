import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'

import { getMd } from "actions/input"

import style from './home.css'

const input = '# This is a header\n\nAnd this is a paragraph'


class Home extends Component {
    constructor() {
        super()
    }
    render() {
        const input = this.props.txt.input;
        return (
            <div className={ style.preview_cont }>
                <ReactMarkdown source={ input } />
            </div>
        )
    }
}

export default connect((state) => ({ txt: state.input }), { getMd })(Home);

