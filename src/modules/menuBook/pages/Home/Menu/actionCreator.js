import { LOADDATA } from './actionType'
// import { get } from '@u/http.js'

const loadDataSync = list => {
    return {
        type: LOADDATA,
        list
    }
}

// redux-thunk
// const loadDataAsync = () => {
//     return async (dispatch) => {
//         let result = await get('/api/list')
//         console.log(result)
//         dispatch(loadDataSync(result))
//     }
// }

const loadDataSyncSaga = () => {
    return {
        type: 'loadDataSaga'
    }
}

export {
    loadDataSync,
    // loadDataAsync
    loadDataSyncSaga
}