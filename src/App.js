import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1)); // Remove the last character
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input)); // Using eval is fine for simple cases but be cautious of security risks
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <input 
          type="text" 
          value={input} 
          readOnly 
          className="calculator-display"
        />
        <div className="calculator-buttons">
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={handleDelete}className="button-wide">←</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button className="button-wide" onClick={() => handleClick('0')}>0</button>
          <button onClick={handleClear} >C</button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
