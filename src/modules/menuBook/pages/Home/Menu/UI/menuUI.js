import React from 'react'
import  Header from '@c/Header'
import Swiper from '../UI/swiper'
import Search from '@/components/search'
import PropTypes from 'prop-types'
import memoize from 'memoize-one'
import HotCate from './hotCate'
import Top10 from './Top10'
import { MenuWrap } from '../StyledHome'

function MEnuUI(props){
    const { list } = props
    // 通过memoize 实现计算属性  只要当传递的数据发生变化的时候才重新计算
    const swiperList = memoize((list)=>{
        return (list && list.length && list.slice(0,5)) || []
    })
    const hotCateList = memoize((list)=>{
        return (list && list.length && list.slice(0,10)) || []
    })
    const top10List = memoize((list)=>{
        return (list && list.length && list.slice(0,13)) || []
    })

    return (
        <MenuWrap>
            <Header title="菜单大全" bg="orange" color="#fff"  />
            <Swiper listArr={swiperList(list)} />
            <Search 
                hasBorder={true}
                innerBg="#fff"
                outBg="#ccc"
            />
            <Top10 listArr={top10List(list)}/>
            <HotCate listArr={hotCateList(list)} />
        </MenuWrap>
    )
}

MEnuUI.propTypes = {
    list: PropTypes.array
}

export default MEnuUI