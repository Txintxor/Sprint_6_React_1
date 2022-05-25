import React from "react";
import { Story } from "./EscenaStyled.js";

const Escena = (props) => {
  return <Story style = {props.style} >{props.element}</Story>
};


export default Escena;


