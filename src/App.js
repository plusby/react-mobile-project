
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import routes from './route/index'

function App() {
 
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          {/* <Switch> */}
            {/* <Route component={Home} path="/home" />
            <Route component={List} path="/list" />
            <Redirect to="/home" path="/" /> */}
            {/* <Route path="/home" children={props=><Home {...props} />} />
            <Route path="/list" children={props=><List {...props} />}/>
            <Route path="/details" children={props=><Details {...props} />}/>
            <Redirect to="/home" path="/" /> */}
            {
              routes && routes.map(item=>{
                return <Route path={item.path} children={props=><item.component {...props} />} />
              })
            }
            <Redirect to="/home" path="/" />
          {/* </Switch> */}
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
