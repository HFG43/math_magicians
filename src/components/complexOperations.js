import React from 'react';
import PropTypes from 'prop-types';

function ComplexOperation({ buttonName, handleClick }) {
  return (
    <div className="calc_complex_operation">
      <button type="button" onClick={() => { handleClick(buttonName); }}>{buttonName}</button>
    </div>
  );
}

ComplexOperation.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const ComplexOperationsPad = ({ handleClick }) => (
  <div className="calc_complex_operations_pad">
    <ComplexOperation handleClick={handleClick} buttonName="AC" />
    <ComplexOperation handleClick={handleClick} buttonName="+/-" />
    <ComplexOperation handleClick={handleClick} buttonName="%" />
  </div>
);

ComplexOperationsPad.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ComplexOperationsPad;
