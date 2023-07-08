import React, { useState } from 'react';
import DisplayNumbers from './displayNumber';
import NumbersPad from './numbers';
import ComplexOperationsPad from './complexOperations';
import RegOperationsPad from './regularOperations';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [operationResult, mathOperation] = useState({});
  const handleClick = (buttonName) => {
    const result = calculate(operationResult, buttonName);
    mathOperation(result);
  };

  return (
    <div className="calc_container">
      <DisplayNumbers operationResult={operationResult} />
      <ComplexOperationsPad handleClick={handleClick} />
      <NumbersPad handleClickNumber={handleClick} />
      <RegOperationsPad handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
