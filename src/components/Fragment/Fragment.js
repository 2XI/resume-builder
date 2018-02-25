import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFragment } from "actions/fragment"
import { setMd } from "actions/input"

import style from './fragment.css'

class Menue extends Component {
    constructor() {
        super()
        this.handleFragment = this.handleFragment.bind(this)
    }
    handleFragment() {
        this.props.getFragment().then(
            () => {
                const str = this.props.res_msg.fragment.person_message   
                this.props.setMd(str)
            }
        )
    }
    render() {
        return (
            <div className={ style.fragment }>
                <div className={ style.editor }>Markdown</div>
                <div className={ style.list_title }>内容片段</div>
                <ul className={ style.list }>
                    <li className={ style.list_item }>联系方式</li>
                    <li className={ style.list_item } onClick={ this.handleFragment }>个人信息</li>
                    <li className={ style.list_item }>经历证明</li>
                    <li className={ style.list_item }>能力证明</li>
                    <li className={ style.list_item }>技能清单</li>
                    <li className={ style.list_item }>致谢</li>
                </ul>
            </div>
        )
    }
}
export default connect((state) => ({ res_msg: state.fragment }), { getFragment, setMd })(Menue)