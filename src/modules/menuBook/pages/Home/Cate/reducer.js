
const defaultState = {
    routeState: {
        selectTab: '',
        cateType: '',
        cateAside: ''
    }
}

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case 'selectTab':
            return {
                routeState: {
                    ...state.routeState,
                    selectTab: action.val
                }
            }
        case 'cateType':
            return {
                routeState: {
                    ...state.routeState,
                    cateType: action.val
                }
            }
        case 'cateAside':
            return {
                routeState: {
                    ...state.routeState,
                    cateAside: action.val
                }
            }
        default:
            return state
    }
}

export default reducer