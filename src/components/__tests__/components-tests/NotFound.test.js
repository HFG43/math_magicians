import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '../../notFound';

it('Renders <NotFound /> correctly', () => {
  const notFound = renderer.create(<NotFound />).toJSON();
  expect(notFound).toMatchSnapshot();
});
