import './App.css';
import {Text} from './Components/class/Text';
import Text2 from './Components/class/Text2';
import { Bloco } from './Components/function/Bloco';
import Bloco2 from './Components/function/Bloco2';
import CounterClass from './Components/class/Counter';
import CounterFunction from './Components/function/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h2>Props e Components:</h2>
        <div className='container'>
          <p>Componentes de classe com props:</p>
          <div className='container'>
            <Text Label="Sem default"></Text>
            <Text2 Label="Com default"></Text2>
          </div>

          <p>Componentes funcionais com props:</p>
          <div className='container'>
            <Bloco Label="Sem default"></Bloco>
            <Bloco2 Label="Com default"></Bloco2>
          </div>
        </div>

        <h2>States:</h2>
        <div className='container flex'>
          <div className='container'>
            <p>State in Class</p>
            <CounterClass></CounterClass>
          </div>

          <div className='container'>
            <p>State in Function</p>
            <CounterFunction></CounterFunction>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;