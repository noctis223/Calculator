import React, { useState } from 'react';
import './style.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('0');
  const [fullExpression, setFullExpression] = useState('');

const handleNumberClick = (num) => {
  if (!(input === '0' && num === '0')) {
    if (input === '0') {
      // If the current input is just '0', replace it with the new number
      setInput(num);
      setOutput(num);
      setFullExpression(num);
    } else {
      // Otherwise, append the number to the existing input
      setInput((prevInput) => prevInput + num);
      setOutput((prevOutput) => (prevOutput === '0' ? num : prevOutput + num));
      setFullExpression((prevExpression) => prevExpression + num);
    }
  }
};

  const handleBackspaceClick = () => {
    if (input.length > 0) {
      const newInput = input.slice(0, -1);
      setInput(newInput);
      setOutput(newInput === '' ? '0' : newInput);
      setFullExpression((prevExpression) =>
        prevExpression.slice(0, -1)
      );
    }
  };


  const handleOperatorClick = (operator) => {
    const lastChar = input.slice(-1);

    if (!isNaN(lastChar) || lastChar === '.') {
      setInput((prevInput) => prevInput + operator);
      setOutput(operator);
      setFullExpression((prevExpression) => prevExpression + operator);
    } else if (lastChar !== operator) {
      setInput((prevInput) => prevInput + operator);
      setOutput(operator);
      etFullExpression((prevExpression) => prevExpression + operator);
    }
  };

  const handleDecimalClick = () => {
    const lastNum = input.split(/[\+\-\*\/]/).pop();
    if (!lastNum.includes('.')) {
      setInput((prevInput) => prevInput + '.');
      setOutput((prevOutput) => prevOutput + '.');
      setFullExpression((prevExpression) => prevExpression + '.');
    }
  };

  const handleClearClick = () => {
    setInput('');
    setOutput('0');
    setFullExpression('');
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
      setOutput(result.toString());
       setFullExpression(input + '=' + result.toString());
    } catch (error) {
      setOutput('Error');
    }
  };

  return (
 <div className="calculator">
      <div id="display" className="display">
        {fullExpression || output}
      </div>
      <div className="buttons">
        <button id="zero" onClick={() => handleNumberClick('0')}>
          0
        </button>
        <button id="one" onClick={() => handleNumberClick('1')}>
          1
        </button>
        <button id="two" onClick={() => handleNumberClick('2')}>
          2
        </button>
        <button id="three" onClick={() => handleNumberClick('3')}>
          3
        </button>
        <button id="four" onClick={() => handleNumberClick('4')}>
          4
        </button>
        <button id="five" onClick={() => handleNumberClick('5')}>
          5
        </button>
        <button id="six" onClick={() => handleNumberClick('6')}>
          6
        </button>
        <button id="seven" onClick={() => handleNumberClick('7')}>
          7
        </button>
        <button id="eight" onClick={() => handleNumberClick('8')}>
          8
        </button>
        <button id="nine" onClick={() => handleNumberClick('9')}>
          9
        </button>
        <button id="add" onClick={() => handleOperatorClick('+')}>
          +
        </button>
        <button id="subtract" onClick={() => handleOperatorClick('-')}>
          -
        </button>
        <button id="multiply" onClick={() => handleOperatorClick('*')}>
          *
        </button>
        <button id="divide" onClick={() => handleOperatorClick('/')}>
          /
        </button>
        <button id="decimal" onClick={handleDecimalClick}>
          .
        </button>
        <button id="equals" onClick={handleEqualsClick}>
          =
        </button>
        <button id="clear" onClick={handleClearClick}>
          C
        </button>
        <button id="backspace" onClick={handleBackspaceClick}>
          &#9003; {/* Unicode character for backspace */}
        </button>
      </div>
    </div>
  );
};

export default Calculator;


// Log to console
console.log('Hello console')