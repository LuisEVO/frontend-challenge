export const getYearsFromDate = (stringDate: string) => {
  const milliseconds = Date.now() - new Date(stringDate).getTime();
  const date = new Date(milliseconds);
  return Math.abs(date.getUTCFullYear() - 1970);
};
