import React, { Component } from 'react';
import { CSSTransition  } from 'react-transition-group'

 const Animate = (ChildrenCom) => {
    return class extends Component{
        render(){
            console.log(this.props)
            const { match } = this.props
            return (
                <CSSTransition 
                    in={!!match}
                    classNames={{
                        enter: "animate__animated",
                        enterActive: 'animate__slideInRight',
                        exit: 'animate__animated',
                        exitActive: 'animate__slideOutLeft'
                    }}
                    timeout={1000}
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