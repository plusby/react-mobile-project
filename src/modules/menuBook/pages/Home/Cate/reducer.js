import { fromJS } from 'immutable'

const defaultState = fromJS({
    routeState: {
        selectTab: '',
        cateType: '',
        cateAside: ''
    }
})

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case 'selectTab':
            return state.setIn(['routeState', 'selectTab'], action.val)
            // return {
            //     routeState: {
            //         ...state.routeState,
            //         selectTab: action.val
            //     }
            // }
        case 'cateType':
            return state.setIn(['routeState', 'cateType'], action.val)
            // return {
            //     routeState: {
            //         ...state.routeState,
            //         cateType: action.val
            //     }
            // }
        case 'cateAside':
            return state.setIn(['routeState', 'cateType'], action.val)
            // return {
            //     routeState: {
            //         ...state.routeState,
            //         cateAside: action.val
            //     }
            // }
        default:
            return state
    }
}

export default reducer