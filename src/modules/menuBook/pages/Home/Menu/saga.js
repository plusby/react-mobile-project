import { takeEvery, call, put } from 'redux-saga/effects'
import { get } from '@u/http.js'
import * as actionCreator from './actionCreator'

function * loadDataAsync(){
  let res = yield call(get, '/api/list')
  yield put(actionCreator.loadDataSync(res))
}

function * loadData() {
  
  yield takeEvery('loadDataSaga', loadDataAsync)
}

export default loadData