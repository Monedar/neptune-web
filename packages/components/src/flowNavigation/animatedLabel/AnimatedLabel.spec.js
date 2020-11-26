import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import AnimatedLabel from '.';

const props = {
  activeStep: 0,
  backward: false,
  labels: ['label1', 'label2'],
};
// jest.mock('react-transition-group/CSSTransition', () => ({ children }) => children);
jest.useFakeTimers();
describe('AnimatedLabel', () => {
  it(`renders no labels`, () => {
    const { container } = render(<AnimatedLabel {...props} />);
    expect(container).toMatchSnapshot();
  });
  it(`renders label 1`, () => {
    const { container } = render(<AnimatedLabel {...props} activeStep={1} />);
    expect(container).toMatchSnapshot();
  });
  it(`renders label 2`, () => {
    const { container } = render(<AnimatedLabel {...props} activeStep={2} />);
    expect(container).toMatchSnapshot();
  });
});
