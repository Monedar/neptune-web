import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import FlowNavigation from '.';
import { Breakpoint } from '../common';
import Logo from '../common/logo';

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
  const mockedLogo = ({ className, type }) => <div className={className}>Logo {type}</div>;
  mockedLogo.Type = { FULL: 'FULL', FLAG: 'FLAG' };
  return mockedLogo;
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
  describe('right for mobile', () => {
    beforeAll(() => {});
    it(`renders Logo ${Logo.Type.FLAG} if onGoBack is not provided and activeStep = 0`, () => {
      const { rerender } = render(<FlowNavigation {...props} />);

      expect(screen.getByText(`Logo ${Logo.Type.FLAG}`).parentElement).toHaveClass('visible-xs');

      rerender(
        <FlowNavigation
          {...props}
          stepper={{
            ...props.stepper,
            activeStep: 1,
          }}
        />,
      );

      expect(screen.getByText(`Logo ${Logo.Type.FLAG}`).parentElement).toHaveClass('visible-xs');

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

      expect(screen.queryByText(`Logo ${Logo.Type.FLAG}`)).not.toBeInTheDocument();
    });

    it(`renders BackButton with AnimatedLabel if onGoBack is provided and activeStep > 0`, () => {
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

      expect(screen.getByText('BackButton').parentElement).toHaveClass('visible-xs');
      expect(screen.getByText('AnimatedLabel')).toBeInTheDocument();
    });
  });
  describe(`on mobile`, () => {
    beforeEach(() => {
      resetClientWidth(Breakpoint.MEDIUM - 1);
    });
    it('renders as expected', () => {
      expect(render(<FlowNavigation {...props} onGoBack={jest.fn()} />)).toMatchSnapshot();
    });
  });
});
