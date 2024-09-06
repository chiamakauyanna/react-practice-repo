import React, {useState} from 'react';

const MiniCalculator = () => {
  const btnsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,' + ',' - ',' * ',' / '];

    const [value, setValue] = useState('');

    const handleClick = (e) => {
      const newValue = e.target.value;
      setValue(value + newValue);
    }

    const handleCalculate = () => {
      setValue(eval(value).toString());
    }

    const handleClear = () => {
      setValue('');
    }

  return (
    <div style={{marginTop: '2rem'}}>
      <div 
      style={{
        border :'2px solid', 
        width: '70px', 
        height: '30px', 
        marginBottom: '1rem'}}
        >{value}
      </div>
      
      {
        btnsArr.map((item, index) => (
          <button  key={index} onClick={handleClick} value={item}>{item}</button>
        ))
      }
      <button onClick={handleCalculate}>=</button>
      <button onClick={handleClear}>C</button>
    </div>
  )
}

export default MiniCalculator