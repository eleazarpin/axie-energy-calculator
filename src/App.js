import { useState } from 'react';
// import * as math from 'mathjs';

import './App.css';
import Button from './components/Button.js'
import Energy from './components/Energy.js'

const App = () => {
  const [amount, setAmount] = useState(3);

  const resetMatch = () => {
    setAmount(3);
  }

  const addEnergy = () => {
    const result = amount + 1;
    setAmount(result);
  }

  const removeEnergy = () => {
    if (amount > 0) {
      const result = amount - 1;
      setAmount(result);
    }
  }

  const newRoundEnergy = () => {
    const result = amount + 2;
    setAmount(result);
  }

  return (
    <div className="App">
      <div className="calculator-wrapper">
        <h1>Calculator WIP</h1>
        <Energy amount={amount} />
        <Button symbol="+" handleClick={addEnergy}/>
        <Button symbol="-" handleClick={removeEnergy}/>
        <Button symbol="New Round" handleClick={newRoundEnergy}/>
        <Button symbol="Reset" handleClick={resetMatch}/>
      </div>
    </div>
  );
}

export default App;
