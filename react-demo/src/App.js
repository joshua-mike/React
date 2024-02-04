// import './css/App.css';
// import './css/appStyles.css'
// import styles from './css/appStyles.module.css'
// import { Inline } from './components/Inline';
// import { Stylesheet } from './components/Stylesheet';
// import { Form } from './components/Form.js';
// import { NameList } from './components/NameList.js';
// import { ClickHandler } from './components/ClickHandler.js';
// import { Greet } from './components/Greeting.js'
// import { Message } from './components/Message.js'
// import { ParentComponent } from './components/ParentComponent.js';
// import { UserGreeting } from './components/UserGreeting.js';
import { PostList } from "./components/PostList.js";
import { PostForm } from "./components/PostForm.js";



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
     <PostForm />
     <PostList />
    </div>
  );
}

export default App;
