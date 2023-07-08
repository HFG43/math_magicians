import React from 'react';
import PropTypes from 'prop-types';

const DisplayNumbers = ({ operationResult }) => {
  const { next, total, operation } = operationResult;
  return (
    <div className="calc_display_result">
      {total || ''}
      {' '}
      {operation || ''}
      {' '}
      {next || ''}
    </div>
  );
};

DisplayNumbers.propTypes = {
  operationResult: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default DisplayNumbers;
