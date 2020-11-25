import React, { useEffect, useState } from 'react';
import Types from 'prop-types';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import en from '../../lang/en.json';

const defaultLocale = 'en';
const cache = createIntlCache();

function createIntlInstance(locale, messages) {
  return createIntl(
    {
      locale,
      defaultLocale,
      messages,
    },
    cache,
  );
}

let currentLocale = defaultLocale;

function Provider({ locale, children }) {
  const [intl, setIntl] = useState(createIntlInstance(defaultLocale, en));

  useEffect(() => {
    if (currentLocale !== locale) {
      currentLocale = locale;
      (async function changeLanguage() {
        try {
          const newMessages = await import(`../../lang/${locale}.json`);
          setIntl(createIntlInstance(locale, newMessages));
        } catch (e) {
          setIntl(createIntlInstance(locale, en));
        }
      })();
    }
  }, [locale]);

  return <RawIntlProvider value={intl}>{children}</RawIntlProvider>;
}

Provider.propTypes = {
  locale: Types.string,
  children: Types.node,
};

Provider.defaultProps = {
  locale: defaultLocale,
  children: undefined,
};

export default Provider;
