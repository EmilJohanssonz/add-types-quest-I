
import { Dog } from "./type";

export const numberOfColors = (dogs: Dog[]): number => {
	const uniqueColors = new Set(dogs.map((dog) => dog.color));
	return uniqueColors.size;
};

export const commonColor = (dogs: Dog[]): string => {
	const colorCounts: Record<string, number> = {};
	dogs.forEach((dog) => {
		colorCounts[dog.color] = (colorCounts[dog.color] || 0) + 1;
	});
	return Object.keys(colorCounts).reduce((mostCommon, color) =>
		colorCounts[color] > (colorCounts[mostCommon] || 0) ? color : mostCommon
	);
};
