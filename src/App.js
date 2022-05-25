import React, {useState} from 'react';
import Escena from "./components/escena/Escena.js";
import { Story, Button } from "./components/escena/EscenaStyled.js";
import story from "./data/story.js";
import "./styles/App.css";


function App() {
// Iba a crear un componente aparte, para mejor lectura
//y pasar el prop boleano, pero entendí en el enunciado
//que debía estar en el componente App
  const Elem = () =>{
    return (
      <div>
      <Story>Helloooo</Story>
      <Button onClick={dismiss}>Welcome</Button>
      </div>)
    }
  const [main, setMain] = useState(true);
  
  const dismiss = () => {
    setMain(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        {main && <Elem/>}
         {!main && <Escena story = {story}/>}
      </header>
    </div>
  );
}

export default App;
