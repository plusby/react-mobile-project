import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Animate from '@c/Hoc/animate'

function Details (props){
     
    const { location, history } = props

    const goBack = () => {
        history.push('/list', { from: '/details'})
    }

    return (
        <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => goBack() }
                style={{"background": "orange",color: "#fff"}}
            >详情</NavBar>
        </div>
    )
}

export default Animate(Details)