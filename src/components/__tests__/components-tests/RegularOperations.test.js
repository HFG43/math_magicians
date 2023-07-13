import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import RegOperationsPad from '../../regularOperations';

it('Renders <RegOperationsPad /> correctly', () => {
  const handleClick = jest.fn();

  const regOperationsPad = renderer
    .create(<RegOperationsPad handleClickNumber={handleClick} />)
    .toJSON();
  expect(regOperationsPad).toMatchSnapshot();
});

it('Should be call "+" when button + is clicked', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<RegOperationsPad handleClick={handleClick} />);
  fireEvent.click(getByText('+'));
  expect(handleClick).toHaveBeenCalledWith('+');
});
