import React, { Component } from 'react'

import style from './fragment.css'

export default class Menue extends Component {
    render() {
        return (
            <div className={ style.fragment }>
                <div className={ style.editor }>Markdown</div>
                <div className={ style.list_title }>内容片段</div>
                <ul className={ style.list }>
                    <li className={ style.list_item }>联系方式</li>
                    <li className={ style.list_item }>个人信息</li>
                    <li className={ style.list_item }>经历证明</li>
                    <li className={ style.list_item }>能力证明</li>
                    <li className={ style.list_item }>技能清单</li>
                    <li className={ style.list_item }>致谢</li>
                </ul>
            </div>
        )
    }
}