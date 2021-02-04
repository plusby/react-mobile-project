import styled from 'styled-components'
const Catewrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const NavWrap = styled.div`
    height: 40px;
    background: orange;
    display:flex;
    justify-content: center;
    align-items: center;
    nav{
        border:1px solid #fff;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        div{
            padding: 0 15px;
            display: inline-block;
            color:#fff;
        }
        .active{
            color: orange;
            background: #fff;
            border-radius: 15px;
        }
    }

`
const CateListWrap = styled.div`
    flex: 1;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ccc;
    aside{
        width: 90px;
        overflow-y:scroll;
        p{
           height: 40px;
           line-height: 40px;
           text-align:center;
           color: #888;
           span{
               display: inline-block;
               height: 40px;
               line-height: 40px;
           }
        }
        .active{
            color: #orange;
            background: #fff;
            span{
                border-bottom: 1px solid orange;
                
            }
        }
    }
    section{
        flex: 1;
        overflow-y:scroll;
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            li{
                display:inline-block;
                padding: 6px;
                text-align:center;
            }
        }
    }
`

export {
    NavWrap,
    CateListWrap,
    Catewrap
}