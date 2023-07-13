import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import NumberPad from '../../numbers';

it('Renders <NumberPad /> correctly', () => {
  const handleClick = jest.fn();

  const numberPad = renderer
    .create(<NumberPad handleClickNumber={handleClick} />)
    .toJSON();
  expect(numberPad).toMatchSnapshot();
});

it('Should be call "5" when button 5 is clicked', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<NumberPad handleClickNumber={handleClick} />);
  fireEvent.click(getByText('5'));
  expect(handleClick).toHaveBeenCalledWith('5');
});
