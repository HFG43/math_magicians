import React from 'react';
import DisplayNumbers from './DisplayNumber';
import NumbersPad from './Numbers';
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
