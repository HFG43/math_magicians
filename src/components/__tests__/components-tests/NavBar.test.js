import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../../navbar';

it('Renders <NavBar /> correctly', () => {
  const navBar = renderer
    .create(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    )
    .toJSON();
  expect(navBar).toMatchSnapshot();
});
