import { Dog } from "./type";

export const numberOfColors = (dogs: Dog[]): number => {
  const uniqueColors = new Set(dogs.map((dog : Dog):string => dog.color));
  return uniqueColors.size;
};

export const commonColor = (dogs: Dog[]): string => {
  const colorCounts: Record<string, number> = {};
  dogs.forEach((dog : Dog) :number => {
    return colorCounts[dog.color] = (colorCounts[dog.color] || 0) + 1;
  });
  return Object.keys(colorCounts).reduce((mostCommon : string, color : string) : string =>
    colorCounts[color] > (colorCounts[mostCommon] || 0) ? color : mostCommon,
  );
};
