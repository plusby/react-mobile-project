import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import Immutable from 'immutable'
import reducer from './reducer'
import sagas from './saga'

// 使用immutable
const initialState = Immutable.Map()

// 使用saga
const sagaMiddleware = createSagaMiddleware()

// const store  = createStore(reducer,applyMiddleware(thunk))
// 通过createStore创建一个store
const store  = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware)
  )

  
sagas.forEach(saga => {
  return sagaMiddleware.run(saga)
});

export default store