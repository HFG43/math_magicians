import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function RegOperation({ operation }) {
  const handleRegularClick = () => {
    const result = calculate({}, operation);
    console.log(result);
  };
  return (
    <div className="calc_regular_operation">
      <button type="button" onClick={handleRegularClick}>
        {operation}
      </button>
    </div>
  );
}

RegOperation.propTypes = {
  operation: PropTypes.string.isRequired,
};

const RegOperationsPad = () => (
  <div className="calc_reg_operations_pad">
    <RegOperation operation="÷" />
    <RegOperation operation="x" />
    <RegOperation operation="-" />
    <RegOperation operation="+" />
    <RegOperation operation="=" />
  </div>
);

export default RegOperationsPad;
