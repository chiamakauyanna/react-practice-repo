import React, { useRef } from 'react';

const Factorial = () => {
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  const calculateFactorial = () => {
    const n = inputRef.current.value;

    if(n < 0 || !n) {
      resultRef.current.innerText = 'input valid number';
      return;
    }

    let num = 1;
    for (let i = 1; i <= n; i++) {
      num *= i;
    }

    resultRef.current.innerText = `${n}! = ${num}`;
    inputRef.current.value = ''
  };
  
  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Factorial Calculator</h1>
      <input 
        type="number"
        ref={inputRef} />
      <button onClick={calculateFactorial}>Calculate</button>
      <p ref={resultRef}></p>
    </div>
  );
};

export default Factorial;
