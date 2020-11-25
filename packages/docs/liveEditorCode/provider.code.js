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
        searchPlaceholder="Search locale"
        search
        options={[
          { value: 'en', label: 'English (en)' },
          { value: 'fr', label: 'French (fr)' },
          { value: 'fr', label: 'French (fr)' },
        ]}
      />
    </Provider>
  );
}
