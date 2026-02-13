export const matchCase = (value: number, singular: string, plural: string) => {
  return `${value === 1 ? singular : plural}`;
};

export const humanReadableNumber = (value: number) => {
  const strVal = value.toString();
  const repr = [];
  for (let i = strVal.length - 1; i >= 0; i -= 3) {
    repr.push(strVal.slice(Math.max(i - 2, 0), i + 1));
  }
  return repr.reverse().join(",");
};
