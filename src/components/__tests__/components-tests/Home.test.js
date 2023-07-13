import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../home';

it('Renders <Home /> correctly', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});
