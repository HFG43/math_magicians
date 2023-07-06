import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function ComplexOperation({ buttonName }) {
  const handleComplexClick = () => {
    const result = calculate({}, buttonName);
    console.log(result);
  };
  return (
    <div className="calc_complex_operation">
      <button type="button" onClick={handleComplexClick}>{buttonName}</button>
    </div>
  );
}

ComplexOperation.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

const ComplexOperationsPad = () => (
  <div className="calc_complex_operations_pad">
    <ComplexOperation buttonName="AC" />
    <ComplexOperation buttonName="+/-" />
    <ComplexOperation buttonName="%" />
  </div>
);
export default ComplexOperationsPad;
