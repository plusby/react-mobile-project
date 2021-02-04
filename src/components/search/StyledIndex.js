import styled from 'styled-components'


const a = (props)=>props
console.log('props',a())
const InputWrap = styled.div`
    position: relative;
    height: 2.4rem;
    background: ${(props)=>(props.outBg)};
    p{
        position: absolute;
        left: 0.6rem;
        right: 0.6rem;
        height: 1.8rem;
        top: 0.3rem;
        width:94%;
        border: ${(props)=>(props.hasBorder ? '1px solid #ee742f' : 'none')};
        border-radius: .3rem; 
        background: ${(props)=>(props.innerBg)};
        line-height: 1.8rem;
    }
    svg{
        position: absolute;
        z-index:2;
        left: 29%;
        transform: translate(-50%, -50%);
        top: 50%;
    }
`

export {
    InputWrap
}