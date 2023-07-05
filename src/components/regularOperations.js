import React from 'react';

const RegOperation = (props) => (
  <div className="calc_regular_operation">
    <span>{props.text}</span>
  </div>
);

const RegOperationsPad = () => (
  <div className="calc_reg_operations_pad">
    <RegOperation text="/" />
    <RegOperation text="X" />
    <RegOperation text="*" />
    <RegOperation text="+" />
    <RegOperation text="=" />
  </div>
);

export default RegOperationsPad;
