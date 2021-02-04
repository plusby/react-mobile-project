import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { get } from '@u/http.js'
import CateList from './CateList'

function CateListWrap(props) {
    const { selected } = props
    const [ assideList1, setAssideList1] = useState([])
    const [ assideList2, setAssideList2] = useState([])
    const [ currentSelected, setCurrentSelected] = useState(selected)

    useEffect(async ()=>{
        await Promise.all([get('/api/cate1'),get('/api/cate2')]).then(res=>{
            if(res[0]){
                let result = res[0]
                setAssideList1(result.data)
            }
            if(res[1]){
                let result = res[1]
                setAssideList2(result.data)
            }
        })
    },[])

    useEffect(()=>{
        setCurrentSelected(selected)
    },[selected])

    return (
        <>
            {
                currentSelected === 'cate' ? (
                    <CateList listArr={assideList1}/>
                ) : (
                    <CateList listArr={assideList2}/>
                )
            }
        </>
    );
}

CateListWrap.propTypes = {
    selected: PropTypes.number
}

export default CateListWrap;