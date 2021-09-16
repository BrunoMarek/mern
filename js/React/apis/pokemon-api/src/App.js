import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';
import AxioPokemon from './components/AxioPokemon';

function App() {
  return (
    <div className="App">
      <h1>Look at these pokemons</h1>
      <AxioPokemon></AxioPokemon>
    </div>
  );
}

export default App;
