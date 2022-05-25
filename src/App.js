import React, { useState } from "react";
import Escena from "./components/escena/Escena.js";
import { Story, Button } from "./components/escena/EscenaStyled.js";
import "./styles/App.css";

function App() {
  // Iba a crear un componente aparte, para mejor lectura
  //y pasar el prop boleano, pero entendí en el enunciado
  //que debía estar en el componente App
  const Elem = () => {
    return (
      <div>
        <Story>Helloooo</Story>
        <Button onClick={dismiss}>Welcome</Button>
      </div>
    );
  };
  const [main, setMain] = useState(true);

  const dismiss = () => {
    setMain(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {main && <Elem />}
        {/* Creo que no lo he hecho correctamente 
        ya que no envio los textos como props, el componente Escena viene montado previamente */}
        {!main && <Escena />}
      </header>
    </div>
  );
}

export default App;
