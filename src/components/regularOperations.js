import React from 'react';
import PropTypes from 'prop-types';

const RegOperation = ({ text }) => (
  <div className="calc_regular_operation">
    <span>{text}</span>
  </div>
);

RegOperation.propTypes = {
  text: PropTypes.string.isRequired,
};

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
