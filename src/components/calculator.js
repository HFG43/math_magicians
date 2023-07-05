import React from 'react';
import DisplayNumbers from './DisplayNumber';
import NumbersPad from './Numbers';
import ComplexOperationsPad from './ComplexOperations';
import RegOperationsPad from './RegularOperations';

const Calculator = () => (
  <div className="calc_container">
    <DisplayNumbers />
    <ComplexOperationsPad />
    <NumbersPad />
    <RegOperationsPad />
  </div>
);

export default Calculator;
