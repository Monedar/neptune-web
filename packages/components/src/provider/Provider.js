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

function Provider({ locale, children }) {
  let currentLocale = locale;
  const [intl, setIntl] = useState(createIntlInstance(defaultLocale, en));

  useEffect(() => {
    (async function changeLanguage() {
      if (currentLocale !== locale) {
        currentLocale = locale;
        try {
          const newMessages = await import(`../../lang/${locale}.json`);
          setIntl(createIntlInstance(locale, newMessages));
        } catch (e) {
          setIntl(createIntlInstance(locale, en));
        }
      }
    })();
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
