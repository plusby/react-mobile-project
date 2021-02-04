import React from 'react';
import { withRouter } from 'react-router'
import { HotCateWrap, HotCateWrapTitle } from '../StyledHome'
import PropTypes from "prop-types"
import img1 from '@/assets/img/1.jpg'

function HotCate(props) {
    const { listArr, history  } = props
    const goDetails = (item) =>{
        console.log(item)
        console.log(props)
        history.push('/list', { title: item.name})
    }
    return (
        <HotCateWrap>
            <h1>排行Top 10</h1>
            <ul>
                
                {
                    listArr && listArr.map(item=>{
                        return(
                            <li key={item.id} onClick={()=>{ goDetails(item) }}>
                                <img src={item.img}></img>
                                <div>
                                    <p className="name">{item.name}</p>
                                    <HotCateWrapTitle>
                                        <span>{item.all_click}</span>浏览<span>{item.favorites}</span>
                                    </HotCateWrapTitle>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </HotCateWrap>
    );
}

HotCate.propTypes = {
    listArr: PropTypes.array
}

export default withRouter(HotCate);