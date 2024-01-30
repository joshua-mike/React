import './App.css';
import { Greet } from './components/Greeting'

function App() 
{
  return (
    <div className="App">
      <Greet name = ' is dope.'>
        <h2>Modularized JavaScript!</h2>
     </Greet>
    </div>
  );
}

export default App;
