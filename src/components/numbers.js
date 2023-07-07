import React from 'react';
import PropTypes from 'prop-types';

function Numbers({ number, handleClickNumber }) {
  return (
    <span>
      <button type="button" id={number} onClick={() => { handleClickNumber(number); }}>
        {number}
      </button>
    </span>
  );
}
Numbers.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleClickNumber: PropTypes.func.isRequired,
};

const NumberPad = ({ handleClickNumber }) => (
  <div className="calc_num_pad">
    <Numbers handleClickNumber={handleClickNumber} number="1" />
    <Numbers handleClickNumber={handleClickNumber} number="2" />
    <Numbers handleClickNumber={handleClickNumber} number="3" />
    <Numbers handleClickNumber={handleClickNumber} number="4" />
    <Numbers handleClickNumber={handleClickNumber} number="5" />
    <Numbers handleClickNumber={handleClickNumber} number="6" />
    <Numbers handleClickNumber={handleClickNumber} number="7" />
    <Numbers handleClickNumber={handleClickNumber} number="8" />
    <Numbers handleClickNumber={handleClickNumber} number="9" />
    <Numbers handleClickNumber={handleClickNumber} number="0" />
    <Numbers handleClickNumber={handleClickNumber} number="." />
  </div>
);

NumberPad.propTypes = {
  handleClickNumber: PropTypes.func.isRequired,
};
export default NumberPad;
