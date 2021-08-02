import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import login from './Component/Login';
import sign from './Component/SignUp';
import hello from './Component/Hello';
import home from './Component/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={login}/>
        <Route path="/sign" component={sign}/>
        <Route path="/hello" component={hello}/>
        <Route path="/home" component={home}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
