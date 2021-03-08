import {reducer as MenuReducer} from '../modules/menuBook/pages/Home/Menu'
import { reducer as HomeReducer } from '../modules/menuBook/pages/Home/reducer'
import { Reducer as CateReducer } from '../modules/menuBook/pages/Home/Cate/index'
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

const reducer = combineReducers({
    MenuReducer,
    HomeReducer,
    CateReducer,
})

export default reducer