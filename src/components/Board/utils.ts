export const getFileNumeric = (idx: number): number => {
  return (idx % 8) + 1;
};

export const FILES = 'abcdefgh';

export const getFile = (idx: number): string => {
  return FILES[getFileNumeric(idx) - 1];
};

export const getRank = (idx: number): number => 8 - Math.floor(idx / 8);

export const getFileAndRank = (idx: number): string => {
  const file = getFile(idx);
  const rank = getRank(idx);

  return `${file}${rank}`;
};

export const isOdd = (num: number): boolean => num % 2 !== 0;

export const isDarkSquare = (idx: number): boolean => {
  const rank = getRank(idx);
  const fileNumeric = getFileNumeric(idx);

  return isOdd(rank) ? isOdd(fileNumeric) : !isOdd(fileNumeric);
};
