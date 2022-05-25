import React from 'react';
import story from "./data/story.js";
import styled from "styled-components";

const Story = styled.p`
  font-size: 1.5rem;
  color: #001d3d;
  background-color: #ffd60a;
  text-align: center;
  border-radius: 8px;
  margin: 2rem;
  padding: 0.5rem;`

const Escena = () => {
  return (
    <div>
      {story.map((elem) => (
        <Story>{elem}</Story>
      ))}
    </div>
  );
};

export default Escena;
