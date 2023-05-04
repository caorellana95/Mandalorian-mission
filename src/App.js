import logo from './mandalore.png';
import './App.css';
import PrimerComponente from './components/Home';
import SegundoComponente from './components/Missions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PrimerComponente/>
        <SegundoComponente/>
      </header>
    </div>
  );
}

export default App;
