import logo from './logo.svg';
import './App.css';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import ListProduct from './components/ListProduct';
import EditProduct from './components/EditProduct';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>All Products</h1>
        <Link className= "btn btn-info mr-3" to= "/">Home</Link>
        <Link className= "btn btn-success" to= "/new">Create a new product</Link>
        <Switch>
          <Route exact path = "/">
            <AllProducts></AllProducts>
          </Route>
          <Route exact path = "/new">
            <ListProduct></ListProduct>
          </Route>
          <Route exact path = "/product/:idParam">
            <OneProduct></OneProduct>
          </Route>
          <Route exact path = "/product/edit/:idParam">
            <EditProduct></EditProduct>
          </Route>





        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
