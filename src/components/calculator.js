import React from 'react';
import DisplayNumbers from './displayNumber';
import NumbersPad from './numbers';
import ComplexOperationsPad from './complexOperations';
import RegOperationsPad from './regularOperations';

const Calculator = () => (
  <div className="calc_container">
    <DisplayNumbers />
    <ComplexOperationsPad />
    <NumbersPad />
    <RegOperationsPad />
  </div>
);

export default Calculator;
