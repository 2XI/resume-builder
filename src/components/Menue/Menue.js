import React, { Component } from 'react'
import { connect } from 'react-redux'
import html2pdf from 'html2pdf.js'

import { getMd } from "actions/input"

import style from './menue.css'
import image from './images/avatar.png'

class Menue extends Component {
    constructor() {
        super()
        this.handleClickMd = this.handleClickMd.bind(this)
        this.handleClickPdf = this.handleClickPdf.bind(this)
    }
    createAndDownloadFile(content) {
        let aTag = document.createElement('a')
        let blob = new Blob([content])
        aTag.download = 'resume.md'
        aTag.href = URL.createObjectURL(blob)
        aTag.click()
        URL.revokeObjectURL(blob)
    }
    handleClickMd() {
        const input = this.props.txt.input
        this.createAndDownloadFile(input)
    }
    handleClickPdf() {
        let element = document.getElementById('element-to-print')
        html2pdf(element)
    }
    render() {
        return (
            <div className={ style.menue }>
                <a href="https://github.com/2XI" target="_blank" className={ style.log_cont }>
                    <img src={ image } />
                    <div className={ style.log_txt }>2XI</div>
                </a>
                <div className={ style.bt_cont }>
                    <div className={ style.bt }>编辑</div>
                    <div className={ style.bt } onClick={ this.handleClickMd }>下载</div>
                    <div className={ style.bt } onClick={ this.handleClickPdf }>PDF</div>
                    <div className={ style.bt }>教程</div>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({ txt: state.input }), { getMd })(Menue);