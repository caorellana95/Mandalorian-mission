import logo from './mandalore.png';
import './App.css';
import Home from './components/Home';
import Missions from './components/Missions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home/>
        <Missions/>
      </header>
    </div>
  );
}

export default App;
