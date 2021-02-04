import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { NavBar, Icon } from 'antd-mobile';
import { UlWrap } from './Style'
import { loadDataAsync } from '../Home/Menu/index'
import Animate from '@c/Hoc/animate'

function List(props) {
    console.log(props)
    const { location, history, list, getListData } = props
    const goBack = ()=>{
        history.goBack()
    }
    
    useEffect(()=>{
        if(!list || (list && !list.length)){
            getListData()
        }
    },[list])

    return (
        <div style={{'background': '#fff'}}>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => goBack() }
                style={{"background": "orange",color: "#fff"}}
            >{ location.state && location.state.title }</NavBar>
            <UlWrap>
                {
                    list && list.map((item,index)=>{
                       return (
                        <li key={index}>
                            <img src={item.img} className="left"/>
                            <div className="right">
                                <h3>{item.name}</h3>
                                <p>{item.burdens}</p>
                                <p>浏览量：{item.all_click}</p>
                            </div>
                        </li>
                       )     
                    })
                }
            </UlWrap>
        </div>
    );
}

export default Animate(connect(
    state=>{
        console.log('state',state)
        return {
            list: state.MenuReducer.list.data
        }
    },
    dispatch =>({
        getListData(){
            dispatch(loadDataAsync())
        }
    })
)(List));