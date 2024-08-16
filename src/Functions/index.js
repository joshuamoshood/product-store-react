export const checkURL = (code) => {
  const re = /^(http:\/\/|https:\/\/|www.)/i;

  return re.test(code);
};
