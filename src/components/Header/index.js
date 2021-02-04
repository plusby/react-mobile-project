import React from 'react';
import { NavWrap } from './Style'

function index(props) {
    const { title } = props
    return (
        <NavWrap {...props}>
            <nav>
                {title}
            </nav>
        </NavWrap>
    );
}

export default index;