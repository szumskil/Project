import React, { useState } from 'react';
import * as math from 'mathjs';

function Calculator() {
  const [result, setResult] = useState('');

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function handleClear() {
    setResult('');
  }

  function handleBackspace() {
    setResult(result.slice(0, -1));
  }

  function calculate() {
    try {
      const res = math.evaluate(result);
      setResult(res.toString());
    } catch (error) {
      setResult('Błąd');
    }
  }

  return (
    <div className="calculator">
      <div className="display">{result}</div>
      <div className="buttons">
        <button className="clear" onClick={handleClear}>C</button>
        <button className="backspace" onClick={handleBackspace}>CE</button>
        <button className="equal" onClick={calculate}>=</button>
        <button name="/" onClick={handleClick}>÷</button>
        <button name="*" onClick={handleClick}>×</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="-" onClick={handleClick}>-</button>
        <button name="+" onClick={handleClick}>+</button>
        <button name="." onClick={handleClick}>.</button>
      </div>
    </div>
  );
}

export default Calculator;

