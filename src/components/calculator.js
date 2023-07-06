import React from 'react';
import DisplayNumbers from './displayNumber';
import NumbersPad from './numbers';
import ComplexOperationsPad from './complexOperations';
import RegOperationsPad from './regularOperations';

const calcResult = '10';

const Calculator = () => (
  <div className="calc_container">
    <DisplayNumbers calcResult={calcResult} />
    <ComplexOperationsPad />
    <NumbersPad />
    <RegOperationsPad />
  </div>
);

export default Calculator;
