import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from '../index';

/**
 * Custom `render` function which wraps each component in Provider
 *
 * For more info check RTL docs: https://testing-library.com/docs/example-react-intl/#creating-a-custom-render-function
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
