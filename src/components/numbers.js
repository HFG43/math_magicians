import React from 'react';
import PropTypes from 'prop-types';

function Numbers({ number, handleClickNumber }) {
  return (
    <div>
      <button type="button" onClick={() => { handleClickNumber(number); }}>
        {number}
      </button>
    </div>
  );
}
Numbers.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleClickNumber: PropTypes.func.isRequired,
};

// const NumberPad = ({ handleClick }) => (
//   <div className="calc_num_pad">
//     <Numbers handleClick={handleClick} number="1" />
//     <Numbers handleClick={handleClick} number="2" />
//     <Numbers handleClick={handleClick} number="3" />
//     <Numbers handleClick={handleClick} number="4" />
//     <Numbers handleClick={handleClick} number="5" />
//     <Numbers handleClick={handleClick} number="6" />
//     <Numbers handleClick={handleClick} number="7" />
//     <Numbers handleClick={handleClick} number="8" />
//     <Numbers handleClick={handleClick} number="9" />
//     <Numbers handleClick={handleClick} className="calc_num_pad_zero" number="0" />
//     <Numbers handleClick={handleClick} className="calc_num_pad_dot" number="." />
//   </div>
// );

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
    <Numbers handleClickNumber={handleClickNumber} className="calc_num_pad_zero" number="0" />
    <Numbers handleClickNumber={handleClickNumber} className="calc_num_pad_dot" number="." />
  </div>
);

NumberPad.propTypes = {
  handleClickNumber: PropTypes.func.isRequired,
};
export default NumberPad;
