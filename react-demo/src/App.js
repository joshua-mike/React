import './App.css';
// import { ClickHandler } from './components/ClickHandler';
// import { Greet } from './components/Greeting'
// import { Message } from './components/Message'
// import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/UserGreeting';

function App() 
{
  return (
    <div className="App">
      {/* <Greet name = ' for the world wide web.'>
        <h2>Modularized JavaScript!</h2>
     </Greet>
     <ClickHandler />
     <Message /> */}
     {/* <ParentComponent /> */}
     <UserGreeting />
    </div>
  );
}

export default App;
