import { SWITCHMAP } from "./actionTypes"

const defaultState = {
    switchMap: true
}

const reducer = (state=defaultState,action) => {
    switch(action.type){
        case SWITCHMAP:
            return {
                switchMap: action.val
            }
        default:
            return state
    }
}

export {reducer};