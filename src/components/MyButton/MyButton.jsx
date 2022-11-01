import "./MyButton.css";
import React, { useState } from "react"

function MyButton(props){
  //ESTADO
  let [colorBtn, setColorBtn] = useState(props.color);
  //let colorBtn = props.color;

  function handleClick(){
    setColorBtn("grey");
  }

  const styleButton = {backgroundColor: colorBtn}
  return( 
    <button onClick={handleClick} style={styleButton} className="btn">
      {props.text}
    </button>
  );  
}

export default MyButton;