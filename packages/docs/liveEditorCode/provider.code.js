() => {
  const defaultLocale = 'en';
  const [locale, setLocale] = React.useState(defaultLocale);
  const [selectedLocale, setSelectedLocale] = React.useState({
    value: defaultLocale,
    label: 'English'
  });
  return (
    <Provider locale={locale}>
      Translated message: <FormattedMessage {...messages.ariaLabel} />
      <br /><br />
      <Select
        selected={selectedLocale}
        onChange={item => { setLocale(item.value); setSelectedLocale(item) }}
        placeholder="Select locale"
        options={[
          { value: 'en', label: 'English (en)' },
          { value: 'fr', label: 'French (fr)' },
          { value: 'pl', label: 'Poland (pl)' },
          { value: 'ja', label: 'Japan (ja)' },
          { value: 'ru', label: 'Russian (ru)' },
        ]}
      />
    </Provider>
  );
}
