const numberSuffixer = (unit: number, suffix: string) => (num: number) =>
  `${Math.floor(num / unit)}${suffix}`;

export const numberFormater = (value: number) => {
  if (value >= 1_000_000) {
    return numberSuffixer(1_000_000, 'm')(value);
  }
  if (value >= 1000) {
    return numberSuffixer(1000, 'k')(value);
  }
  return value.toString();
};
