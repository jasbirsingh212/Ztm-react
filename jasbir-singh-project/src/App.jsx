import { useState } from "react";
import "./App.css";

function App() {
  let [first, setfirst] = useState("jasbir");

  const handleClick = () => {
    setfirst("singh");
  };

  console.log(first);

  return (
    <>
      {console.log(first)}
      <div>
        Hello World! {first}
        <button onClick={handleClick}>Change First</button>
      </div>
    </>
  );
}

export default App;
