const deprecatedMessage = ({ component, propName, newProp, expiryDate }) => {
  const newPropMessage = newProp ? ` Please use ${newProp} instead.` : '';
  return `${component} has deprecated the use of ${propName}.${newPropMessage} ${propName} will be removed on or after ${expiryDate.toLocaleString(
    'en-GB',
    { year: 'numeric', month: 'numeric', day: 'numeric' },
  )}`;
};

const deprecated = (validator, { component, newProp = '', expiryDate = null }) => (
  props,
  propName,
  ...rest
) => {
  if (props[propName] != null && typeof props[propName] !== 'undefined') {
    // eslint-disable-next-line
    console.warn(deprecatedMessage({ component, propName, newProp, expiryDate }));
  }
  return validator(props, propName, ...rest);
};

export default deprecated;
