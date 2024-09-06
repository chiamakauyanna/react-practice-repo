import React, {useRef} from 'react'

const ReverseWithUseRef = () => {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  

  const handleClick = (e) => {
    const inputValue = inputRef.current.value;
    const reversedText = inputValue.split('').reverse().join('');
    resultRef.current.innerText = reversedText;
  }

  return (
    <div style={{marginTop: '2rem'}}>
      <h1>Input Reversal</h1>
      <input 
        type="text" 
        ref={inputRef}/>
        <button onClick={handleClick}>Reverse</button>
      <h4>Reversed Input: </h4>
      <p ref={resultRef}></p>
    </div>
  )
}

export default ReverseWithUseRef;