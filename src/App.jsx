import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  // now we will lift the state up as we need to pass the choosenCount from Configurecounter file hence writing below code

  function handleSetCount(newCount){
    // console.log("Setting count to: ", newCount)
    setChosenCount(newCount);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount}></ConfigureCounter>
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
