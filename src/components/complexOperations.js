import React from 'react';
import PropTypes from 'prop-types';

const ComplexOperation = ({ oper }) => {
  (
    <div className="calc_regular_operation">
      <p>{oper}</p>
    </div>
  );
};

ComplexOperation.propTypes = {
  oper: PropTypes.string.isRequired,
};

const ComplexOperationsPad = () => (
  <div className="calc_reg_operations_pad">
    <ComplexOperation oper="AC" />
    <ComplexOperation oper="+/-" />
    <ComplexOperation oper="%" />
  </div>
);
export default ComplexOperationsPad;