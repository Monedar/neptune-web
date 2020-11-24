import React from 'react';
import { select } from '@storybook/addon-knobs';
import { FormattedMessage } from 'react-intl';

import Provider from './Provider';
import closeButtonMessages from '../common/CloseButton/CloseButton.messages';

export default {
  component: Provider,
  title: 'Provider',
};

export const basic = () => {
  const locale = select('locale', ['en', 'fr', 'pl'], 'en');
  return (
    <Provider locale={locale}>
      <FormattedMessage {...closeButtonMessages.ariaLabel} />
    </Provider>
  );
};
