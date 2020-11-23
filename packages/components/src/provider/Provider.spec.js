import React from 'react';
import '@testing-library/jest-dom';
import { render } from '../test-utils';

import Provider from '.';

describe('Provider', () => {
  it('test default state', () => {
    const { container } = render(<Provider />);

    expect(container).toBeEmptyDOMElement();
  });

  it('test component with different locale prop', () => {
    const { container } = render(<Provider locale="jp" />);

    expect(container).toBeEmptyDOMElement();
  });
});
