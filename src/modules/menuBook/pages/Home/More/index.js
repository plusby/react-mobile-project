import React, { useState, useEffect } from 'react';
import Header from '@c/Header'
import { connect } from 'react-redux'
import { MoreWrap } from './Style'
import { List, Switch } from 'antd-mobile';
import { changeSwitchMap } from '../actionCreator'

function More(props) {
    const { switchMap, changeHandler } = props
    const [ checked, setChecked] = useState(switchMap)

    useEffect(()=>{
        setChecked(switchMap)
        console.log('switchMap',switchMap)
    },[switchMap])

    return (
        <MoreWrap>
            <Header title="更多" bg="orange" color="#fff" />
            <div className="content">
            <List >
                <List.Item
                    extra={<Switch
                        checked={checked}
                        onChange={changeHandler}
                    />}
                >开启地图</List.Item>
            </List>
            </div>
        </MoreWrap>
    );
}

export default connect(
    state=>({
        switchMap: state.HomeReducer.switchMap 
    }),
    dispatch=>(
        {
            changeHandler(val){
                dispatch(changeSwitchMap(val))    
            }
        }
    )
)(More);