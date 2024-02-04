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
// import { PostList } from "./components/PostList.js";
// import { PostForm } from "./components/PostForm.js";
import NAMES from "./data/data.json";
import { useState, useTransition } from "react";



function App() 
{
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()



  const changeHandler = (event) =>
  {
    setInputValue(event.target.value)
    startTransition(() => setQuery(event.target.value))
  }

  const filteredNames = NAMES.filter(item =>
    {
      return item.first_name.includes(query) || item.last_name.includes(query)
    })

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
     {/* <PostForm />
     <PostList /> */}
     <input type="text" value={inputValue} onChange={changeHandler} />
     {isPending && <p>Updating list..</p>}
      {filteredNames.map((item) => 
      (
        <p key={item.id}>{item.first_name} {item.last_name}</p>
      ))}
    </div>
  );
}

export default App;
