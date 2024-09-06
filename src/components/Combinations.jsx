import React, {useRef} from 'react'

const Combinations = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const resultRef = useRef(null);

  const calculateFactorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };


  const calculateCombinations = (num) => {
    const n = firstRef.current.value;
    const r = secondRef.current.value;

    if(n < r || n < 0 || r < 0 || !n || !r) {
      resultRef.current.innerText = 'please enter n ≥ r ≥ 0';
      return;
    }

    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }  

    const nfactorial = calculateFactorial(n);
    const rfactorial = calculateFactorial(r)
    const nrfactorial = calculateFactorial(n - r)

      resultRef.current.innerText = (nfactorial / (rfactorial * (nrfactorial)))
    }

   
  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Combinations Calculator</h1>
      <label>
        n:
        <input 
          type="number"
          ref={firstRef} />
      </label>
    <br/>
      <label>
        r:
        <input 
          type="number"
          ref={secondRef} />
      </label>
      <br/>
      <button onClick={calculateCombinations}>Calculate</button>
      <p ref={resultRef}></p>
    </div>
  )
}

export default Combinations