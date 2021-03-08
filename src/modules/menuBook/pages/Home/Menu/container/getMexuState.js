import { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux'
import { loadDataSyncSaga } from '../actionCreator'

// 把hooks相关的逻辑进行提取，使得功能具有单一原则
const GetMenuState = () => {
  const dispatch = useDispatch()
  // const { list } = useSelector(state => state.MenuReducer) // 获取到readux的state数据
  const state = useSelector(state => state.getIn(['MenuReducer'])) // 获取到readux的state数据


  useEffect(()=>{
      dispatch(loadDataSyncSaga())
  },[])

  return {
    // list 
    list: state.getIn(['list'])
  }
}

export default GetMenuState