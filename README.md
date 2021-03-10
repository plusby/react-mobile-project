# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
### 项目中的知识点

### mock模拟数据  JSON-server启动本地服务

### react中没有计算属性，可以使用memoize-one第三方来实现计算属性

### 样式使用了 styled-components

### redux中的数据通过immutableJs进行管理，解决了父组件渲染导致子组件也渲染的问题，提升渲染性能

### redux异步使用saga或thunk

### react-keeper 解决路由问题

# redux学习总结：

  ## 什么情况下使用Redux:
    1. 某个组件的状态，需要共享
    2. 某个状态需要在任何地方都可以拿到
    3. 一个组件需要改变全局状态
    4. 一个组件需要改变另一个组件的状态

  ## 基本概念和API
  #### store
    store就是保存数据的地方，你可以把它看成一个容器，整个应用只有一个store;

  #### createStore
    Redux提供了createStore这个函数，用来生成store;它接收一个函数作为参数，返回新生成的store对象，
    createStore方法还可以接受第二个参数，表示 State 的最初状态。这通常是服务器给出的，注意，如果提供了这个参数，它会覆盖 Reducer 函数的默认初始值。

    import { createStore } from 'redux'
    const store = createStore(fn)

  #### State
    存储了当前store中所有数据的集合


  #### getState()
    获取state数据

    import { createStore } from 'redux
    const store = create(fn)
    const state = store.getState()

  #### Action
    Action是一个对象，其中的type是必须的，表示Action的名称，其他属性可以自由设置，
    Action描述当前发生的事情，通过action描述去改变相应state(改变state都的唯一方法，就是使用action;)

    const action = {
      type: 'ADD_ACTION',
      val: 111
    }

  #### Action Creator
    定义一个函数生成action,这个函数就是Action Creator

    const ADD_TODO = '添加 TODO'

    function addTodo(val){ // Action Creator
      return {
        type: ADD_TODO,
        val
      }
    }
    const action = addTodo(111)

  #### store.dispatch(action)
    触发action修改state的唯一方法
    
    import { createStore } from 'redux'
    const store = createStore(fn)

    store.dispatch({ // 触发action修改state
      type: 'ADD_ACTION',
      val: 111
    })

    结合Action Creator:
    store.dispatch(addTodo(111))

  #### Reducer
    计算修改state的过程就是Reducer,Reducer是一个函数，接收Action和当前state作为参数，
    返回一个新的State

    const reducer = function(state, action){
      // 修改state的逻辑
      return new_state // 返回修改之后的state
    }

    可以给state设置默认值

    const defaultState = 0
    const reducer = (state = defaultState, action) => {
      switch(action.type){
        case 'ADD_ACTION':
          return state + action.val
        default:
          return state
      }
    }
    // 手动调用
    const state = reducer(1, {
      type: 'ADD',
      payload: 2
    });

    store.dispatch方法会自动触发 Reducer。为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法

    import { createStore } from 'redux';
    const store = createStore(reducer);

    上面代码，createStore接收reducer作为参数，生成一个新的state。以后每次执行dispatch(action)就会自动调用
    reducer更新state

    为什么要叫reducer这个名称？因为这个函数可以作为数组的reduce方法的参数，
    const actions = [
      { type: 'ADD', payload: 0 },
      { type: 'ADD', payload: 1 },
      { type: 'ADD', payload: 2 }
    ];

    const total = actions.reduce(reducer, 0); // 3

    注意： reducer是一个纯函数，不能直接修改state,必须返回一个新对象

  #### store.subscribe()
    Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。
    store.subscribe方法返回一个函数，调用这个函数就可以解除监听

    import { createStore } from 'redux';
    const store = createStore(reducer);

    let unsubscribe = store.subscribe(() =>
      console.log(store.getState())
    );

    unsubscribe(); // 取消监听

  #### 简单实现一个createStore

    function createStore(reducer){
      let listeners = []
      let state

      const getState = () => {
        return state
      }

      const dispatch = (action) => {
        state = reducer(state,action)
        listeners.forEach(item=>item()) // state改变触发监听
      }

      const subscribe = (fn) => {
        listeners.push(fn)
        return () => { // 返回一个函数用于取消监听
          listeners = listeners.filter(l => l !== fn);  // 去取消掉当前监听的函数
        }
      }

      return {
        getState,
        dispatch,
        subscribe
      }
    } 

  ## Reducer 的拆分
    前提：
      Reducer 函数负责生成 State。由于整个应用只有一个 State 对象，包含所有数据，对于大型应用来说，这个 State 必然十分庞大，导致 Reducer 函数也十分庞大。

  #### combineReducers(obj)
    合并reducer

    import { combineReducers } from 'redux';
    import add from './add'
    import reduce from './reduce'

    const chatReducer = combineReducers({
      add,
      reduce,
    })

    export default chatReducer;

  #### combineReducers的实现

    总之，combineReducers()做的就是产生一个整体的 Reducer 函数。该函数根据 State 的 key 去执行相应的子 Reducer，并将返回结果合并成一个大的 State 对象。
    
    function combineReducers(reducers){
      return (state = {}, action)=>{ // 产生一个整体的 Reducer 函数
        Object.keys(reducers).reduce((nextState, key)=>{
          nextState[key] = reducers[key](state[key], action);
          return nextState
        },{}) 
      }
    }

  #### 中间件applyMiddleware
  ###### 什么是中间件？
    中间件就是一个函数，对store.dispatch方法进行了改造，在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。

    import { applyMiddleware, createStore } from 'redux';
    import createLogger from 'redux-logger';
    const logger = createLogger();

    const store = createStore(
      reducer,
      applyMiddleware(logger)
    );

    上面代码中，redux-logger提供一个生成器createLogger，可以生成日志中间件logger。然后，将它放在applyMiddleware方法之中，传入createStore方法，就完成了store.dispatch()的功能增强。

    注意：
      createStore方法可以接受整个应用的初始状态作为参数，那样的话，applyMiddleware就是第三个参数了

      中间件的次序有讲究。比如，logger就一定要放在最后，否则输出结果会不正确

      const store = createStore(
        reducer,
        initial_state,
        applyMiddleware(thunk, logger)
      );

  ######  中间件的实现：
      let next = store.dispatch;
      store.dispatch = function dispatchAndLog(action) {
        console.log('dispatching', action); // 中间处理一些逻辑
        next(action); // 继续执行
        console.log('next state', store.getState());
      }

  ## React-Redux
    React-Redux 将所有组件分成两大类：UI 组件（presentational component）和容器组件（container component）

  ###### UI 组件有以下几个特征:
    1. 只负责UI呈现，不带有任何业务逻辑

    2. 没有状态，即不使用this.state这个变量

    3. 所有数据都由参数(props)提供

    4. 不使用任何redux的API

    因为不含有状态，UI 组件又称为"纯组件"，即它纯函数一样，纯粹由参数决定它的值。

    eg:
      function Top10(props) {
          const { listArr } = props
          listArr.push({
              name: '更多...'
          })
          return (
              <Top10Wrap>
                  <h1>热门分类</h1>
                  <Grid 
                      data={listArr} 
                      hasLine={false}
                      columnNum={4}
                      renderItem={dataItem => (
                          <div className="top-item" >
                              {
                                  dataItem.img && <img src={dataItem.img} alt="" />
                              }
                            <p className="name">
                              {dataItem.name}
                            </p>
                          </div>
                        )}
                  />
              </Top10Wrap>
          );
      }

      Top10.propTypes = {
          listArr: PropTypes.array
      }

      export default Top10;

  ###### 容器组件
    容器组件的特征恰恰相反
    
    1. 负责管理数据和业务的逻辑，不负责UI呈现

    2. 带有内部状态

    3. 使用redux的API

    总之，只要记住一句话就可以了：UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。

    你可能会问，如果一个组件既有 UI 又有业务逻辑，那怎么办？回答是，将它拆分成下面的结构：外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图。

    React-Redux 规定，所有的 UI 组件都由用户提供，容器组件则是由 React-Redux 自动生成。也就是说，用户负责视觉层，状态管理则是全部交给它。

    eg:
      // 容器组件Menu
      import GetMenuState from './getMexuState'

      const Menu = (props) => {
          // 把hooks逻辑提取出去
          const { list } = GetMenuState()

          return (
              <>
                  <MenuUI list={list.data}></MenuUI>
              </>
          );
      }

      export default Menu

      // 处理逻辑部分 GetMenuState.js

      import { useEffect } from 'react';
      import { useDispatch, useSelector  } from 'react-redux'
      import { loadDataSyncSaga } from '../actionCreator'

      // 把hooks相关的逻辑进行提取，使得功能具有单一原则
      const GetMenuState = () => {
        const dispatch = useDispatch()
        const state = useSelector(state => state.getIn(['MenuReducer'])) // 获取到readux的state数据

        useEffect(()=>{
            dispatch(loadDataSyncSaga())
        },[])

        return {
          list: state.getIn(['list'])
        }
      }

      export default GetMenuState

  ###### connect(mapStateToProps，mapDispatchToProps)(UI)
    将UI组件和redux关联起来

    import { connect } from 'react-redux'

    const VisibleTodoList = connect(
      mapStateToProps,
      mapDispatchToProps
    )(TodoList)

    connect函数接收两个参数：
      1. mapStateToProps输入逻辑，将state映射到UI的props中；
      2. mapDispatchToProps输出逻辑，将用户对UI组件的操作映射成Action

  ###### mapStateToProps(state,props)
    mapStateToProps是一个函数。它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。

    const mapStateToProps = state=>{
      return {
            list:state.MenuReducer.list 
        }
    }

    上面代码。把获取到state下面MenuReducer中的list数据，映射到props上的list属性，供ui组件使用

    mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染

    connect方法可以省略mapStateToProps参数，那样的话，UI 组件就不会订阅Store，就是说 Store 的更新不会引起 UI 组件的更新

  ###### mapDispatchToProps()
    mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象

    如果mapDispatchToProps是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数

    const mapDispatchToProps = (
      dispatch,
      ownProps
    ) => {
      return {
        getListData(){
          dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: ownProps.filter
          })
        }
      };
    }

    如果mapDispatchToProps是一个对象

    const mapDispatchToProps = {
      getListData: (filter) => {
        type: 'SET_VISIBILITY_FILTER',
        filter: filter
      };
    }

    export default connect(
        state=>{
            return {
              list:state.MenuReducer.list 
            }
        },
        dispatch=>({
            getListData(){
                dispatch(loadDataAsync())
            }
        })
    )(Menu);

  ### Provider 组件
    向组件注入store

    let store = createStore(todoApp);

    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )







  









