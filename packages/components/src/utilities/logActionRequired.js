export function logActionRequired(message) {
  if (process?.env?.NODE_ENV === 'development') {
    // eslint-disable-next-line
    console.warn(message);
  }
}

export function logActionRequiredIf(message, conditional) {
  if (conditional) {
    logActionRequired(message);
  }
}
