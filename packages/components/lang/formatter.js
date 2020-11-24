exports.format = (messages) => {
  const results = {};
  Object.entries(messages).forEach(([id, msg]) => {
    results[id] = msg.defaultMessage;
  });
  return results;
};
