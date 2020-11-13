import React from 'react';
import { select } from '@storybook/addon-knobs';
import Provider from './Provider';
import CloseButton from '../common/CloseButton';

export default {
  component: Provider,
  title: 'NeptuneProvider',
};

export const basic = () => {
  const locale = select('locale', ['en', 'fr', 'pl'], 'en');
  return (
    <Provider locale={locale}>
      <CloseButton onClick={() => {}} />
    </Provider>
  );
};
