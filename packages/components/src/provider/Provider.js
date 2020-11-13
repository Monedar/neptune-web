import React, { useEffect } from 'react';
import Types from 'prop-types';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { en } from '../../lang';

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

let intl = createIntlInstance(defaultLocale, en);

function Provider({ locale, children }) {
  useEffect(() => {
    (async function changeLanguage() {
      try {
        const newMessages = await import(`../../lang/${locale}.json`);
        intl = createIntlInstance(locale, newMessages);
      } catch (e) {
        intl = createIntlInstance(locale, en);
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
