import logo from './logo.svg';
import './App.css';
import GreetingF from './components/pure/greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio de Greeting.jsx */}
        {/*<Greeting name="Carlos"></Greeting>*/}
        <GreetingF name="Carlos"></GreetingF>
      </header>
    </div>
  );
}

export default App;
