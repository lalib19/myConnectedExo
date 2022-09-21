import React, { useState } from "react";
import "./App.css";

const [msg, setMsg] = useState("");

const handleClick = async () => {
  const data = await window.fetch("/");
  const json = await data.json();
  const msg = json.msg
  setMsg(msg)
  console.log(json)
};

return (
  <div>
    <button onClick={handleClick}>Dis Bonjour</button>
    <p>{msg}</p>
  </div>
);


// npx create-react-app client
// ajouter "client": "cd front && npm start"  dans le package.json du front, dans les "scripts"
// cela permet de npm run client

// 36:20