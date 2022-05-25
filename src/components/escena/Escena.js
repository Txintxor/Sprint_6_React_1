import React, { useState } from "react";
import story from "../../data/story.js";
import {Story, Button} from "./EscenaStyled.js"



const Escena = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    const children = document.getElementById("storyContainer").children;
    if (index < children.length - 1) {
      for (let item of children) {
        let id = parseInt(item.id);
        id === index + 1
          ? (item.style.backgroundColor = "#FC6722")
          : (item.style.backgroundColor = "#ffd60a");
      }
      setIndex(index + 1);
    }    
  };

  const prior = () => {
    if (index !== 0) {
      const children = document.getElementById("storyContainer").children;
      for (let item of children) {
        let id = parseInt(item.id);
        id === index - 1
          ? (item.style.backgroundColor = "#FC6722")
          : (item.style.backgroundColor = "#ffd60a");
      }
      setIndex(index - 1);
    }    
  };

  return (
    <div>
      <Button onClick={prior}>Anterior</Button>
      <Button onClick={next}>Següent</Button>
      <div id="storyContainer">
        {story.map((elem, index) => (
          index === 0 ? <Story key={index} id={index} 
          style={{background : "#FC6722"}}>
          {elem}
       </Story>
          :<Story key={index} id={index}>
             {elem}
          </Story>
        ))}
      </div>
    </div>
  );
};


export default Escena;
