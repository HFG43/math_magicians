import React from 'react';
import renderer from 'react-test-renderer';
import ComplexOperationsPad from '../../complexOperations';

it('Renders <ComplexOperationsPad /> correctly', () => {
  const handleClick = jest.fn();

  const operationsPad = renderer
    .create(<ComplexOperationsPad handleClick={handleClick} />)
    .toJSON();
  expect(operationsPad).toMatchSnapshot();
});
