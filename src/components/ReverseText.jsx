import React, { useState }  from 'react'

const ReverseText = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{marginTop: '2rem'}}>
      <h1>Input Reversal</h1>
      <input 
        type="text" 
        value={value}
        onChange={(e) => setValue(e.target.value)}/>
      <h2>Reversed Input</h2>
      <p>{value.split('').reverse().join('')}</p>
    </div>
  )
}

export default ReverseText
