import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFragment } from "actions/fragment"
import { setMd } from "actions/input"

import dealScroll from "../../util"

import style from './fragment.css'

class Menue extends Component {
    constructor() {
        super()
        this.handleFragment = this.handleFragment.bind(this)
    }
    handleFragment(target) {
        this.props.getFragment().then(
            () => {
                const input = this.props.txt.input
                const str = input + '\r\n\r\n' + this.props.res_msg.fragment[target]
                this.props.setMd(str)
                dealScroll()
            }
        )
    }
    render() {
        return (
            <div className={ style.fragment }>
                <div className={ style.editor }>Markdown</div>
                <div className={ style.list_title }>内容片段</div>
                <ul className={ style.list }>
                    <li className={ style.list_item } onClick={ this.handleFragment.bind(this, 'contact') }>联系方式</li>
                    <li className={ style.list_item } onClick={ this.handleFragment.bind(this, 'person_message') }>个人信息</li>
                    <li className={ style.list_item } onClick={ this.handleFragment.bind(this, 'experience') }>经历证明</li>
                    <li className={ style.list_item } onClick={ this.handleFragment.bind(this, 'ability') }>能力证明</li>
                    <li className={ style.list_item } onClick={ this.handleFragment.bind(this, 'skill_list') }>技能清单</li>
                    <li className={ style.list_item } onClick={ this.handleFragment.bind(this, 'thank') }>致谢</li>
                </ul>
            </div>
        )
    }
}
export default connect((state) => ({ res_msg: state.fragment, txt: state.input }), { getFragment, setMd })(Menue)