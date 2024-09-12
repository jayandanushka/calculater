import React, { useState } from 'react';
import './App.css';

// Utility function to safely evaluate the expression
const evaluateExpression = (expression) => {
  try {
    // Create a new function to evaluate the expression
    // Using Function constructor is safer than eval, but still ensure input is controlled.
    const result = new Function('return ' + expression)();
    return result !== undefined ? result : 'Error';
  } catch (error) {
    return 'Error';
  }
};

function App() {
  const [input, setInput] = useState('');

  // Handler for adding input to the expression
  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Handler to clear the input
  const handleClear = () => {
    setInput('');
  };

 // Handler for deleting the last character
const handleDelete = () => {
  setInput((prevInput) => {
    // Ensure input is a string before applying slice
    if (typeof prevInput === 'string') {
      return prevInput.slice(0, -1);
    }
    return '';
  });
};

// Handler for calculating the result
const handleCalculate = () => {
  const result = evaluateExpression(input);
  // Convert the result to a string before setting input
  setInput(result.toString());
};

  return (
    <div className="App">
      <div className="calculator">
        {/* Display Component */}
        <input
          type="text"
          value={input}
          readOnly
          className="calculator-display"
        />
        {/* Buttons Component */}
        <div className="calculator-buttons">
          <button onClick={() => handleInput('/')}>/</button>
          <button onClick={() => handleInput('.')}>.</button>
          <button onClick={handleDelete} className="button-wide">←</button>
          <button onClick={() => handleInput('7')}>7</button>
          <button onClick={() => handleInput('8')}>8</button>
          <button onClick={() => handleInput('9')}>9</button>
          <button onClick={() => handleInput('*')}>*</button>
          <button onClick={() => handleInput('4')}>4</button>
          <button onClick={() => handleInput('5')}>5</button>
          <button onClick={() => handleInput('6')}>6</button>
          <button onClick={() => handleInput('-')}>-</button>
          <button onClick={() => handleInput('1')}>1</button>
          <button onClick={() => handleInput('2')}>2</button>
          <button onClick={() => handleInput('3')}>3</button>
          <button onClick={() => handleInput('+')}>+</button>
          <button className="button-wide" onClick={() => handleInput('0')}>0</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
