import React from 'react';
import Escena from "./components/escena/Escena.js";
import story from "./components/escena/data/story.js";
import "./App.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Escena story = {story}/>
      </header>
    </div>
  );
}

export default App;
