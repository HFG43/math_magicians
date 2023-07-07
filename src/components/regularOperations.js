import React from 'react';
import PropTypes from 'prop-types';

function RegOperation({ operation, handleClick }) {
  return (
    <div className="calc_regular_operation">
      <button type="button" onClick={() => { handleClick(operation); }}>
        {operation}
      </button>
    </div>
  );
}

RegOperation.propTypes = {
  operation: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const RegOperationsPad = ({ handleClick }) => (
  <div className="calc_reg_operations_pad">
    <RegOperation handleClick={handleClick} operation="÷" />
    <RegOperation handleClick={handleClick} operation="x" />
    <RegOperation handleClick={handleClick} operation="-" />
    <RegOperation handleClick={handleClick} operation="+" />
    <RegOperation handleClick={handleClick} operation="=" />
  </div>
);

RegOperationsPad.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default RegOperationsPad;
