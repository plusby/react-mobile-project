import styled from 'styled-components'

const NavWrap = styled.div`
    nav{
        height: 40px;
        line-height: 40px;
        background: ${props=>(props.bg)};
        color: ${props=>(props.color)};
        text-align: center;
        font-size: 14px;
    }
`

export { NavWrap } 