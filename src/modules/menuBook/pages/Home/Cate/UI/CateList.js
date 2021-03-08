import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { CateListWrap } from '../Style'

function CateList(props) {
    const { listArr, history } = props
    const [ assideList1, setAssideList1] = useState([])
    const [ assideConetntList1, setAssideConetntList1 ] = useState([])
    const [ currentSelected, setCurrentSelected ] =  useState(0)

    useEffect(()=>{
        setAssideConetntList1(listArr[0] ? listArr[0].list : [])
        setAssideList1(listArr)
        setCurrentSelected(0)
    },[listArr])

    const assideHandler = (index) => {
        setCurrentSelected(index)
        setAssideConetntList1(assideList1[index].list)
    }

    console.log('history',history)

    const goDetails = (item) =>{
        history.push('/list', { title: item.name, from: '/home'})
    }

    return (
        <CateListWrap>
            <aside>
                {
                    assideList1.map((item,index) => {
                        return (
                            <p className={currentSelected === index ? "active" : ""} key={index} onClick={()=>{assideHandler(index)}}>
                                <span>
                                    {item.name}
                                </span>
                            </p>    
                        )
                    })
                }
            </aside>
            <section>
                <ul>
                    {
                        assideConetntList1.map((item,index)=>{
                            return(
                                <li key={index} onClick={()=>{goDetails(item)}}>
                                    { item.name }
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </CateListWrap>
    );
}

CateList.propTypes = {
    listArr: PropTypes.array
}

export default withRouter(CateList);