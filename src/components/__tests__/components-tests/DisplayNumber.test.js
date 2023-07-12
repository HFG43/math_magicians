import React from 'react';
import renderer from 'react-test-renderer';
import DisplayNumbers from '../../displayNumber';

it('Renders <DisplayNumbers /> correctly', () => {
  const operationResult = { next: '5', total: null, operation: '+' };

  const operationsPad = renderer
    .create(<DisplayNumbers operationResult={operationResult} />)
    .toJSON();
  expect(operationsPad).toMatchSnapshot();
});
