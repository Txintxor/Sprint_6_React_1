import React, { useState } from "react";
import {Escena} from "./components/escena/Escena.js";
import story from "./data/story.js";
import { Button, Story, Intro} from "./components/escena/EscenaStyled.js";
import "./styles/App.css";

function App() {
  const [index, setIndex] = useState(0);

  // PANTALLA DE PRESENTACION
  const Elem = () => {
    return (
      <Intro>
        <Story>Helloooo</Story>
        <Button onClick={dismiss}>Welcome</Button>
      </Intro>
    );
  };
  const [main, setMain] = useState(true);

  // FUNCION QUE ELIMINA LA PANTALLA DE PRESENTACIÓN
  const dismiss = () => {
    setMain(false);
  };

//AQUÍ GUARDO EL ELEMENTO QUE SERVIRÁ DE BACKGROUND
  const back = document.querySelector('.App-header');

  //FUNCION QUE LLAMA EL BOTON ANTERIOR PARA PASAR AL SIGUIENTE NIVEL DE LA HISTORIA
  const next = () => {
    const target = document.getElementById("storyContainer");
    
    let children = target.children;
    children = [...children];
    if (index < children.length - 1) {
      children.map((element, i) =>        
      i === index + 1             
          ? (element.style.backgroundColor = "#FC6722") && (back.style.backgroundImage = `url(img/${i+1}.jpg)`)
          : (element.style.backgroundColor = "#ffd60a") 
      );
      setIndex(index + 1);
    }
  };

  //FUNCION QUE LLAMA EL BOTON SEGÜENT PARA BAJAR AL NIVEL ANTERIOR DE LA HISTORIA
  const prior = () => {
    if (index > 0) {
      
      const target = document.getElementById("storyContainer");
      let children = target.children;
      children = [...children];
      children.map((e, i) =>
        i === index - 1
          ? (e.style.backgroundColor = "#FC6722") && (back.style.backgroundImage = `url(img/${index}.jpg)`)
          : (e.style.backgroundColor = "#ffd60a")
      );
      setIndex(index - 1);
    }
  };

  return (
    <div className="App">
      {main && <Elem/>}
      <header className="App-header" style={{backgroundImage : `url(img/1.jpg)`}}>
        <div id="buttonContainer">
          <Button onClick={prior}>Anterior</Button>
          <Button onClick={next}>Següent</Button>
        </div>
        <div id="storyContainer">
          {story.map((ele, index) =>
            index === 0 ? (
              <Escena
                key={index}
                element={ele.txt}
                style={{ backgroundColor: "#FC6722" }}
              />
            ) : (
              <Escena key={index} element={ele.txt} />
            )
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
