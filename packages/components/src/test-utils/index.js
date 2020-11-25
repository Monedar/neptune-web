import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from '..';

/**
 * Custom `render` function which wraps passed elements in Provider component
 */
function render(ui, { locale = 'en', ...renderOptions } = {}) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return <Provider {...{ locale }}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
