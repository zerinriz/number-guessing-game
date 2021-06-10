/* eslint-disable eqeqeq */
import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

function App() {
  const [randomNum, setRandomNum] = useState(0);
  const [answer, setAnswer] = useState("");
  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(10);
  const [lastTries, setLastTries] = useState([]);
  
  function getRandomNumber() {
    setAnswer("Good Luck!");
    setLastTries([]);
    setUserInput("");
    let digit = Math.floor(Math.random() * 100);
    setRandomNum(digit);
    setCount(10);
    console.log(digit);
  }

  function clear() {
    setUserInput("");
    setAnswer("");
  }

  function resetAll() {
    getRandomNumber();
    setUserInput("");
    setCount(10);
    setAnswer("Let's go again!");
    setLastTries([]);
  }

  function guessNumber() {
    if (randomNum == userInput) {
      setAnswer("Congratulations! You got it right!");
      setCount("");
      setUserInput("");
      setLastTries([]);
    } else if (count == 0) {
      setAnswer("GAME OVER");
      setCount("");
      setUserInput("");
      setLastTries([]);
    } else if (userInput === "") {
      setAnswer("No numbers submited!");
    } else if (userInput > 100) {
      setAnswer("Can't type numbers above 100!");
      setUserInput("");
      setCount(count);
    } else if (randomNum > userInput) {
      setAnswer("UPS! The last guess was too low!");
      setCount(count - 1);
      setUserInput("");
      setLastTries(userInput);
      setLastTries([...lastTries, userInput]);
    } else if (randomNum < userInput) {
      setAnswer("UPS! The last guess was too high!");
      setCount(count - 1);
      setUserInput("");
      setLastTries(userInput);
      setLastTries([...lastTries, userInput]);
      console.log(count);
    }
    setTimeout(function () {
      setAnswer("");
    }, 1500);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Number Guessing Game</h2>
        <h3>Press start to begin!</h3>
      </header>
      <div className="buttons">
        <button className="btn" onClick={() => getRandomNumber()}>
          Start
        </button>
        <button className="btn" onClick={() => guessNumber()}>
          Submit
        </button>
        <button className="btn" onClick={() => clear()}>
          Clear
        </button>
        <button className="btn" onClick={() => resetAll()}>
          Reset
        </button>
      </div>
      <InputField
        userInput={userInput}
        setUserInput={setUserInput}
        answer={answer}
        count={count}
        lastTries={lastTries}
        setLastTries={setLastTries}
        setAnswer={setAnswer}
      />
      <p className="lastNumbers">{lastTries.join(" - ")}</p>
    </div>
  );
}

export default App;
