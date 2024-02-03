// import './css/App.css';
// import './css/appStyles.css'
// import styles from './css/appStyles.module.css'
// import { Inline } from './components/Inline';
// import { Stylesheet } from './components/Stylesheet';
import { Form } from './components/Form.js';
//import { NameList } from './components/NameList';
// import { ClickHandler } from './components/ClickHandler';
// import { Greet } from './components/Greeting'
// import { Message } from './components/Message'
// import { ParentComponent } from './components/ParentComponent';
//import { UserGreeting } from './components/UserGreeting';

function App() 
{
  return (
    <div className="App">
      {/* <Greet name = ' for the world wide web.'>
        <h2>Modularized JavaScript!</h2>
     </Greet>
     <ClickHandler />
     <Message /> */}
     {/* <UserGreeting /> */}
     {/* <NameList /> */}
     {/* <Stylesheet />
     <Inline />
     <h1 className='error'>Error</h1>
     <h1 className={styles.success}>Success</h1> */}
     <Form />
    </div>
  );
}

export default App;
