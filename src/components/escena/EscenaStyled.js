import styled from "styled-components";


const Story = styled.p`
  font-size: 1.25rem;
  color: #001d3d;
  background-color: #ffd60a;
  text-align: center;
  border-radius: 8px;
  margin: 2rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  border-radius: 8px;
  margin: 2rem 1.5rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Intro = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #282c34;`
export {Story, Button, Intro};