import React, { Component } from 'react';
import { CSSTransition  } from 'react-transition-group'

 const Animate = (ChildrenCom) => {
    return class extends Component{

        render(){
            // console.log(this.props)
            const { match } = this.props
            const { state, pathname } = this.props.location
            const from = state && state.from

            let enterActive = ''
            let exitActive = ''

            const SIR = 'animate__slideInRight'
            const SIL = 'animate__slideInLeft'
            const SOR = 'animate__slideOutRight'
            const SOL = 'animate__slideOutLeft'

            switch (true) {
                case from === '/home':
                case from === '/list' && pathname === '/details':
                    enterActive = SIR
                    exitActive = SOL
                    break;
                case from === '/list' && pathname === '/home':
                case from === '/details' && pathname === '/home':
                case from === '/details' && pathname === '/list':
                    enterActive = SIL
                    exitActive = SOR
                    break;
                default:
                    break;
            }


            console.log('enterActive',match)


            return (
                <CSSTransition 
                    in={!!match}
                    classNames={{
                        enter: "animate__animated",
                        enterActive,
                        exit: 'animate__animated',
                        exitActive
                    }}
                    timeout={600}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <ChildrenCom {...this.props} />
                </CSSTransition>
            )
        }
    }
}
export default Animate