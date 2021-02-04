import Home from './modules/menuBook/pages/Home'
import './App.css';
import { Provider } from 'react-redux'
import List from './modules/menuBook/pages/List/index'
import store from './store'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


function App() {
 
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          {/* <Switch> */}
            {/* <Route component={Home} path="/home" />
            <Route component={List} path="/list" />
            <Redirect to="/home" path="/" /> */}
            <Route path="/home" children={props=><Home {...props} />} />
            <Route path="/list" children={props=><List {...props} />}/>
            <Redirect to="/home" path="/" />
          {/* </Switch> */}
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
