import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Routing baby</h1>
        <Switch>
          <Route exact path="/">
            <h3>Welcome to the home page</h3>
            <Link to="/about">Go to about</Link> | <Link to="/joke">Piadinha</Link>
          </Route>
          <Route exact path ="/about">
            <h1>Show only in /about</h1>
          </Route>
          <Route exact path="/joke">
            <h3>Piadinha hahahaha</h3>
          </Route>
          <Route exact path="/info/:id">
            <Info></Info>
          </Route>
          <Route exact path="/info/:id/:color/:height">
            <Info></Info>
          </Route>





        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
