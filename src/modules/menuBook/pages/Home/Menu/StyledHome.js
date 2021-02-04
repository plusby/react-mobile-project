import styled from 'styled-components'
import ellipsis from '@a/styles/ellipsis' 

const Container = styled.div`
    height: 2.8rem;
    line-height: 2.8rem;
    background: yellow;
    color: #fff;
`

const SwiperWrap = styled.div`
    height: 0;
    font-size:0;
    padding-bottom: 62.6%;
    position: relative;
    .slider{
        position: static !important;
    }
`

const HotCateWrapTitle = ellipsis(styled.p` // styled-components增强式写法
    color: #888;
    font-size:12px;
    height: 20px;
    line-height: 20px;
    span{
        margin: 0 4px;
    }
`)

const HotCateWrap = styled.div`
    h1{
        font-size: 14px;
        text-align: left;
        height: 20px;
        line-height: 20px;
        padding: 0 10px;
    }
    ul{
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
    }
    li{
        width: 50%;
        padding: 0 10px 5px;
        img{
            width: 100%;
            height: 80px;
        }
    }
    div{
        .name{
            font-size: 13px;
            font-weight: 400;
            text-align: center;
        }
    }
`

const Top10Wrap = styled.div`
padding: 10px 0;
background:#fff;
h1{
    font-size: 14px;
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    margin: 0;
}
.top-item{
    padding-bottom: 0.1rem;
    img{
        width: 80%;
        height: 50px;
        border-radius: 6px;
        margin-bottom: 0.02rem;
    }
    .name{
        font-size: 13px;
        font-weight: 400;
        text-align: center;
    }
}
.am-flexbox{
    overflow: visible !important;
}
.am-grid-item-content{
    align-items: center;
    display: flex;
    justify-content: center;
}
`

export {
    Container,
    SwiperWrap,
    HotCateWrap,
    Top10Wrap,
    HotCateWrapTitle
}