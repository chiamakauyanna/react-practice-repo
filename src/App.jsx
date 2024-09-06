import React from 'react';
import Counter from './components/counter';
import ReverseText from './components/ReverseText';
import ReverseWithUseRef from './components/ReverseWithUseRef';
import MiniCalculator from './components/MiniCalculator';
import TodoList from './components/TodoList';
import Factorial from './components/Factorial';
import Combinations from './components/Combinations';
import Permutations from './components/Permutations';

const App = () => {
  return (
    <div className='bg-gray-200'>
      <Counter />
      <ReverseText />
      <ReverseWithUseRef />
      <MiniCalculator />
      <TodoList />
      <Factorial />
      <Combinations />
      <Permutations />
    </div>
  )
}

export default App