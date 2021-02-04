import React from 'react';
import { Icon } from 'antd-mobile';
import { InputWrap } from './StyledIndex'

function Input(props) {
    console.log('props',props)
    return (
        <InputWrap {...props}>
            <p><Icon type="search" />想吃什么搜这里</p>
        </InputWrap>
    );
}

export default Input;