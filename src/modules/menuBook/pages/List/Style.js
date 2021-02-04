import styled from 'styled-components'

export const UlWrap = styled.ul`
    background: #fff;
    li{
        padding: 1px 10px;
        display: flex;
        just-content: space-between;
        margin: 5px 0;
        img{
            width: 100px;
        }
        .right{
            width: calc(100% - 200px);
            text-align: left;
            padding-left: 18px;
            p{
                font-size:12px;
                line-height: 16px;
            }
        }
    }
`