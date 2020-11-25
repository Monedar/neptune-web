import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import OverlayHeader from '.';

describe('OverlayHeader', () => {
  const props = {
    avatar: <div />,
    onClose: jest.fn(),
    theme: OverlayHeader.Theme.LIGHT,
  };
  it(`renders as expected with ${OverlayHeader.Theme.LIGHT} theme `, () => {
    expect(render(<OverlayHeader {...props} />).container).toMatchSnapshot();
  });

  it(`renders as expected with ${OverlayHeader.Theme.DARK} theme `, () => {
    expect(
      render(<OverlayHeader {...props} theme={OverlayHeader.Theme.DARK} />).container,
    ).toMatchSnapshot();
  });

  it(`renders separator only if avatar and onClose are provided `, () => {
    const { container } = render(<OverlayHeader {...props} />);
    expect(container.querySelector('.separator')).toBeInTheDocument();
  });

  it(`doesn't render separator if avatar or onClose are not provided `, () => {
    const { container, rerender } = render(<OverlayHeader {...props} onClose={null} />);
    expect(container.querySelector('.separator')).not.toBeInTheDocument();
    rerender(<OverlayHeader {...props} avatar={null} />);
    expect(container.querySelector('.separator')).not.toBeInTheDocument();
  });
});
