import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../../ninja';

it('Renders <Quote /> correctly', () => {
  const quote = renderer.create(<Quote />).toJSON();
  expect(quote).toMatchSnapshot();
});
