import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
    <div className="App">
       <Header />
      <Switch>
        <Route path="/details/:id" >
            <Detail/>
        </Route>
        <Route exact path="/" >
          <Login/>
        </Route>
        <Route exact path="/home" >
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
