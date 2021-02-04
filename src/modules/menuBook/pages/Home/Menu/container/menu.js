import React,{ useEffect } from 'react';
import MenuUI from '../UI/menuUI'
import { connect } from 'react-redux'
import { loadDataAsync } from '../actionCreator'

const Menu = (props) => {
    const { getListData, list } = props

    useEffect(()=>{
        getListData()
    },[])

    return (
        <>
            <MenuUI list={list.data}></MenuUI>
        </>
    );
}

export default connect(
    state=>{
        console.log('state',state)
        return {
           list:state.MenuReducer.list 
        }
    },
    dispatch=>({
        getListData(){
            dispatch(loadDataAsync())
        }
    })
)(Menu);