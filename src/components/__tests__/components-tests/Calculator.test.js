// import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../../calculator';

it('Renders <Calculator /> correctly', () => {
  const calculator = renderer.create(<Calculator />).toJSON();
  expect(calculator).toMatchSnapshot();
});
