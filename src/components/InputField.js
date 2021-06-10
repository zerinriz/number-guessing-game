import React from "react";

function InputField({ answer, setUserInput, count, userInput }) {
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <form className="inputField">
      <div className="countNum">{count}</div>
      <input
        type="text"
        className="input"
        onChange={handleUserInput}
        value={userInput}
      ></input>
      <div className="answer">{answer}</div>
    </form>
  );
}

export default InputField;
