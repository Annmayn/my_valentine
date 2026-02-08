export const matchCase = (value: number, singular: string, plural: string) => {
  return `${value === 1 ? singular : plural}`;
};
