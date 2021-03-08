import { LOADDATA } from './actionType'
import { Map } from 'immutable'

const defaultState = Map({
    list: []
})

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case LOADDATA:
            return state.set('list', action.list)
            // return {
            //     list: action.list
            // }
        default:
            return state
    }
}

export default reducer