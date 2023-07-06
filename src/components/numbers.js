import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function Numbers({ number }) {
  const handleNumberClick = () => {
    const result = calculate({}, number);
    console.log(result);
  };
  return (
    <div>
      <button type="button" onClick={handleNumberClick}>
        {number}
      </button>
    </div>
  );
}

Numbers.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

const NumberPad = () => (
  <div className="calc_num_pad">
    <Numbers number="1" />
    <Numbers number="2" />
    <Numbers number="3" />
    <Numbers number="4" />
    <Numbers number="5" />
    <Numbers number="6" />
    <Numbers number="7" />
    <Numbers number="8" />
    <Numbers number="9" />
    <Numbers className="calc_num_pad_zero" number="0" />
    <Numbers className="calc_num_pad_dot" number="." />
  </div>
);

export default NumberPad;
