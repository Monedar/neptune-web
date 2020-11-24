import React from 'react';
import '@testing-library/jest-dom';
import { FormattedMessage } from 'react-intl';
import { render, waitFor, cleanup, screen } from '../test-utils';

import Provider from '.';
import closeButtonMessages from '../common/CloseButton/CloseButton.messages';

describe('Provider', () => {
  beforeEach(cleanup);

  it('tests that provider does not add any elements in the DOM', () => {
    const { container } = render(<Provider />);

    expect(container).toBeEmptyDOMElement();
  });

  test.each([
    ['pl', 'Blisko'],
    ['fr', 'Proche'],
    ['en', 'Close'],
  ])('tests switching locale (%s)', async (locale, expectedMessage) => {
    expect(document.body).toBeEmptyDOMElement();

    render(
      <Provider {...{ locale }}>
        <FormattedMessage {...closeButtonMessages.ariaLabel} />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText(expectedMessage)).toBeInTheDocument();
    });
  });
});
