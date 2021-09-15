import './App.css';
import ChatBox from './components/ChatBox';
import Login from './components/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import {useDataState} from "./DataState"
function App() {

  // const [getdata,setData]=useDataState();
  return (
    <div className="App">
    <Router>

      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>

        <Route  path="/chat">
          <ChatBox/>
        </Route>

      </Switch>
    </Router>
    </div>
  );
}

export default App;
