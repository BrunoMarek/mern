import logo from './logo.svg';
import './App.css';
import FunctionalMenu from './components/FunctionalMenu';

function App() {
  return (
    <div className="App">
      <h1>Dojo Diner! Take a look at our nasty menu!</h1>
      <p>Thank you for supporting small businesses!</p>
      <FunctionalMenu nameOfDish ="Momo" price= "12.99" numServed= {10} >
        <p>Toxo</p>
      </FunctionalMenu>
      <FunctionalMenu nameOfDish="Strogonoff" price= "15.99" numServed= {5} >Ai sim</FunctionalMenu>
    </div>
  );
}

export default App;
