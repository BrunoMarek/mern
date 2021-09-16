import logo from './logo.svg';
import './App.css';
import Coins from './components/Coins';
import AxioCoins from './components/AxioCoins';

function App() {





  return (
    <div className="App container">
      <h1>Top crypto today</h1>
      {/* <Coins></Coins> */}
      <AxioCoins></AxioCoins>
    </div>
  );
}

export default App;
