import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
function App() {
  return (
    <div className="App">
      <h1>Dojo Diner! Take a look at our nasty menu!</h1>
      <p>Thank you for supporting small businesses!</p>
      
      
      <Menu nameOfDish = "Momo" price= "$12.99"  numberOfMealsServed = {2}>
        Toxo
      </Menu>
      <Menu nameOfDish= "Strogonoff" price ="15.99" numberOfMealsServed ={5}>
        Comida BR
      </Menu>
    </div>
  );
}

export default App;
