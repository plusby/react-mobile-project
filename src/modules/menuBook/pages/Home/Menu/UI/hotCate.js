import React, { useCallback } from 'react';
import { withRouter } from 'react-router'
import { useHistory } from 'react-router-dom'
import { HotCateWrap, HotCateWrapTitle } from '../StyledHome'
import PropTypes from "prop-types"
import img1 from '@/assets/img/1.jpg'

function HotCate(props) {
    const { listArr  } = props
    const history = useHistory()
    // const goDetails = (item) =>{
    //     console.log(item)
    //     console.log(props)
    //     history.push('/list', { title: item.name, from: '/home'})
    // }
    const goDetails = useCallback(
        (item) =>{
            console.log(item)
            history.push('/list', { title: item.name, from: '/home'})
        },[])

    return (
        <HotCateWrap>
            <h1>排行Top 10</h1>
            <ul>
                
                {
                    listArr && listArr.map(item=>{
                        return(
                            <li key={item.id} onClick={ ()=>goDetails(item) }>
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

// export default withRouter(HotCate);
export default HotCate;
