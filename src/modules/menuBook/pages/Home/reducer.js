import { SWITCHMAP } from "./actionTypes"
import { Map } from 'immutable'

// 普通js方法
// const defaultState = {
//     switchMap: true
// }

// const reducer = (state=defaultState,action) => {
//     switch(action.type){
//         case SWITCHMAP:
//             return {
//                 switchMap: action.val
//             }
//         default:
//             return state
//     }
// }

// 使用Immutable
const defaultState = Map({
    switchMap: true
})

const reducer = (state=defaultState,action) => {
    switch(action.type){
        case SWITCHMAP:
            return state.set('switchMap', action.switchMap)
        default:
            return state
    }
}

export {reducer};