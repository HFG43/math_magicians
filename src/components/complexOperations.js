import React from 'react';

const ComplexOperation = (props) => {
  (
    <div className="calc_regular_operation">
      <p>{props.calcAction}</p>
    </div>
  );
};

const ComplexOperationsPad = () => (
  <div className="calc_reg_operations_pad">
    <ComplexOperation calcAction="AC" />
    <ComplexOperation calcAction="+/-" />
    <ComplexOperation calcAction="%" />
  </div>
);
export default ComplexOperationsPad;
