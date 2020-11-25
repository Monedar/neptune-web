import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import FlowNavigation from '.';
import { Breakpoint } from '../common';

jest.mock('lodash.throttle', () => jest.fn((fn) => fn));

jest.mock('./AnimatedLabel', () => {
  // eslint-disable-next-line react/prop-types
  return ({ className }) => <div className={className}>AnimatedLabel</div>;
});
jest.mock('./backButton', () => {
  // eslint-disable-next-line react/prop-types
  return ({ className, label }) => <div className={className}>BackButton{label}</div>;
});
jest.mock('../common/logo', () => {
  // eslint-disable-next-line react/prop-types
  const Logo = ({ className }) => <div className={className}>Logo</div>;
  Logo.Type = { FULL: 'FULL', FLAG: 'FLAG' };
  return Logo;
});

describe('FlowNavigation', () => {
  const originalClientWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientWidth');
  const resetClientWidth = (width) => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      value: width,
    });
  };
  beforeEach(() => {
    resetClientWidth(Breakpoint.MEDIUM + 1);
  });

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', originalClientWidth);
  });

  const props = {
    avatar: <div />,
    stepper: {
      steps: [
        {
          label: 'label-0',
        },
        { label: 'label-1' },
      ],
      activeStep: 0,
    },
  };
  it(`renders as expected`, () => {
    expect(render(<FlowNavigation {...props} />).container).toMatchSnapshot();
  });

  it(`renders separator only if avatar and onClose are provided `, () => {
    const { container } = render(<FlowNavigation {...props} onClose={jest.fn()} />);
    expect(container.querySelector('.separator')).toBeInTheDocument();
  });

  it(`doesn't render separator if avatar or onClose are not provided `, () => {
    const { container, rerender } = render(<FlowNavigation {...props} />);
    expect(container.querySelector('.separator')).not.toBeInTheDocument();
    rerender(<FlowNavigation {...props} avatar={null} />);
    expect(container.querySelector('.separator')).not.toBeInTheDocument();
  });
  describe('for mobile', () => {
    beforeAll(() => {});
    it(`renders Logo only if onGoBack is not provided and activeStep = 0`, () => {
      const { rerender } = render(<FlowNavigation {...props} />);
      // Renders desktop and mobile Logo
      expect(screen.getAllByText('Logo')).toHaveLength(2);
      expect(screen.getAllByText('Logo')[1]).toHaveClass('visible-xs');

      rerender(
        <FlowNavigation
          {...props}
          stepper={{
            ...props.stepper,
            activeStep: 1,
          }}
        />,
      );

      expect(screen.getAllByText('Logo')[1]).toHaveClass('visible-xs');

      rerender(
        <FlowNavigation
          {...props}
          onGoBack={jest.fn()}
          stepper={{
            ...props.stepper,
            activeStep: 1,
          }}
        />,
      );
      // Renders only desktop Logo
      expect(screen.getAllByText('Logo')).toHaveLength(1);
    });

    it(`renders BackButton with AnimatedLabel only if onGoBack is provided and activeStep > 0`, () => {
      const { rerender } = render(<FlowNavigation {...props} onGoBack={jest.fn()} />);
      expect(screen.queryByText('BackButton')).toBeNull();

      rerender(
        <FlowNavigation
          {...props}
          stepper={{
            ...props.stepper,
            activeStep: 1,
          }}
        />,
      );
      expect(screen.queryByText('BackButton')).toBeNull();

      rerender(
        <FlowNavigation
          {...props}
          onGoBack={jest.fn()}
          stepper={{
            ...props.stepper,
            activeStep: 1,
          }}
        />,
      );

      expect(screen.getByText('BackButton')).toHaveClass('visible-xs');
      expect(screen.getByText('AnimatedLabel')).toBeInTheDocument();
    });
  });
  describe(`renders as expected on mobile view`, () => {
    beforeEach(() => {
      resetClientWidth(Breakpoint.MEDIUM - 1);
    });
    it('something', () => {
      expect(render(<FlowNavigation {...props} onGoBack={jest.fn()} />)).toMatchSnapshot();
    });
  });
});
