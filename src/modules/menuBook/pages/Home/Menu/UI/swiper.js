import React,{ useState, useEffect } from 'react'
import { Carousel } from 'antd-mobile';
import { SwiperWrap } from '../StyledHome'
import PropTypes from "prop-types"
import img1 from '@/assets/img/1.jpg'
import img2 from '@/assets/img/2.jpg'
import img3 from '@/assets/img/3.jpg'
import img4 from '@/assets/img/4.jpg'

export default function Swiper(props){
    const { listArr } = props
    const [ list, setList ] = useState(listArr)
    console.log('list',list)
    const [ imgHeight, setImgHeight] = useState()
    
    useEffect(()=>{
        setList(listArr)
    },[listArr])

    return(
        <SwiperWrap>
            <Carousel
                autoplay={false}
                infinite
            >
            {list.map(val => (
                <img
                    src={val.img}
                    alt=""
                    key={val.id}
                />
            ))}
            </Carousel>
        </SwiperWrap>
    )
}

Swiper.propTypes = {
    listArr: PropTypes.array
}