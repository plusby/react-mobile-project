import React, { useState, useEffect } from 'react';
import { TabBar } from 'antd-mobile';
import {Menu} from './Menu'
import { connect } from 'react-redux'
import { Cate } from "./Cate"
import More from './More'
import { actionCreator } from './Cate/index.js'
import Animate from '@c/Hoc/animate'

function Home(props) {
    const { switchMap, selectTab, selectTabChange } = props
    console.log('selectTab',selectTab)
    const [ selectedTab, setTab ] = useState(selectTab || 'blueTab')
    const [ fullScreen, setFullScreen ] = useState(true)
    const [ hidden, setHidden ] = useState(false)

    const tabChange = (type) => {
        setTab(type);
        selectTabChange(type)
    }
    
    let ItemArr = [
        <TabBar.Item
            title="菜单大全"
            key="Life"
            icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={selectedTab === 'blueTab'}
            onPress={() => {
                tabChange('blueTab')
            }}
            data-seed="logId"
        >
            <Menu />
        </TabBar.Item>,
        <TabBar.Item
            icon={
            <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={
            <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
            />
            }
            title="分类"
            key="Koubei"
            selected={selectedTab === 'redTab'}
            onPress={() => {
                tabChange('redTab')
            }}
            data-seed="logId1"
        >
            <Cate />
        </TabBar.Item>,
        <TabBar.Item
            icon={
            <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={
            <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
            />
            }
            title="实时地图"
            key="Friend"
            selected={selectedTab === 'greenTab'}
            onPress={() => {
                tabChange('greenTab')
            }}
        >
            <></>
        </TabBar.Item>,
        <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="更多"
            key="my"
            selected={selectedTab === 'yellowTab'}
            onPress={() => {
                tabChange('yellowTab')
            }}
        >
            <More />
        </TabBar.Item>
    ]
    const [ TabItems, setTabItems] = useState([...ItemArr])
   
    useEffect(()=>{
       
    },[switchMap])

    

    return (
        <div style={fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: '100%' }}>
            <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={hidden}
            >   
                {  
                    switchMap ? ItemArr.map((item,index)=>{
                        return (
                            item
                        )
                    }) : ItemArr.filter((item,index)=>{
                        return index !== 2
                    })
                }
            </TabBar>
        </div>
    )
};

export default Animate(connect(
    state=>({
        switchMap: state.HomeReducer.switchMap,
        selectTab: state.CateReducer.routeState.selectTab,
    }),
    dispatch=>({
        selectTabChange(type){
            dispatch(actionCreator.changeSelectTab(type))
        }
    })
)(Home))