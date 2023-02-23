import React, { useState } from "react";
import ListDis from "./ListDis";

function Inputer({ setAddList, AddList}) {
  const [text, settext] = useState("");
  
  const handleonchange = (event) => {
    console.log("onchange");
    settext(event.target.value);


  };
  return (
    <div className="container" style={{ margin: "20px", textAlign: "center" }}>
      <input type="text" onChange={handleonchange} value={text} style={{ margin: "10px", textAlign: "center" }}></input>
      <button
        style={{
          backgroundColor: "lightBlue",
          padding: "8px 15px 8px 15px",
          borderRadius: "10px",
        }}  
        onClick={() => {
          setAddList([...AddList, text]);
          settext("");}}
      >
        +
      </button>
      
    </div>
  );
}

export default Inputer;
