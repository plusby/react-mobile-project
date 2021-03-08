import React, { useState } from 'react';
import { connect } from 'react-redux'
import Search from '@/components/search'
import CateListWrap from './CateListWrap'
import { NavWrap, Catewrap } from '../Style'
import { actionCreator } from '../index.js'

function Cate(props) {
    const { setCateType, cateType } = props
    console.log('props222',props)
    const [ selected, setSelected] = useState(cateType || 'cate')
    const selectHandler = (index) => {
        console.log('index',index)
        setSelected(index)
        setCateType(index)
    }
    return (
        <Catewrap>
            <NavWrap>
                <nav>
                    <div onClick={()=>{selectHandler('cate')}} className={selected === 'cate' ? "active" : ""}>分类</div>
                    <div onClick={()=>{selectHandler('ingredients')}} className={selected === 'ingredients' ? "active" : ""}>食材</div>
                </nav>
            </NavWrap>
            <Search 
                hasBorder={false}
                innerBg="#ccc"
                outBg="#fff"
            />
            <CateListWrap selected={selected} />
        </Catewrap>
    );
}

export default connect(
    state=>{
        console.log('state',state)
        return {
            // cateType: state.CateReducer.routeState.cateType
            cateType: state.getIn(['CateReducer', 'routeState', 'cateType'])
        }
    },
    dispatch =>({
        setCateType(type){
            dispatch(actionCreator.changeCateType(type))
        }
    })
)(Cate);