import React,{ useEffect } from 'react';
import MenuUI from '../UI/menuUI'
import { connect } from 'react-redux'
import { loadDataAsync } from '../actionCreator'
import GetMenuState from './getMexuState'

const Menu = (props) => {
    // 把hooks逻辑提取出去
    const { list } = GetMenuState()

    // const { getListData, list } = props

    // useEffect(()=>{
    //     getListData()
    // },[])

    return (
        <>
            <MenuUI list={list.data}></MenuUI>
        </>
    );
}

export default Menu

// export default connect(
//     state=>{
//         console.log('state',state)
//         return {
//            list:state.MenuReducer.list 
//         }
//     },
//     dispatch=>({
//         getListData(){
//             dispatch(loadDataAsync())
//         }
//     })
// )(Menu);