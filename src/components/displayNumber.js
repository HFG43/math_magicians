import React from 'react';
import PropTypes from 'prop-types';

const DisplayNumbers = ({ calcResult }) => (
  <div className="calc_display_result">
    {calcResult}
  </div>
);

DisplayNumbers.propTypes = {
  calcResult: PropTypes.string,
};

DisplayNumbers.defaultProps = {
  calcResult: '0',
};

export default DisplayNumbers;
