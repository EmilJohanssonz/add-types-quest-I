
import { Monster } from "./type";

export const prettyPrintMonster = (monster: Monster): void => {
	console.log(
		`Monster: ${monster.name}, Age: ${monster.age}, Tentacles: ${monster.tentacles}, Eyes: ${monster.eyes}, Has Wings: ${monster.hasWings}`
	);
};

export const averageMonsterAge = (monsters: Monster[]): number => {
	if (!monsters || monsters.length === 0) {
		return 0;
	}
	let totalAge = 0;
	monsters.forEach((monster) => {
		totalAge += monster.age;
	});
	return totalAge / monsters.length;
};

export const averageNumberOfTentacles = (monsters: Monster[]): number => {
	if (!monsters || monsters.length === 0) {
		return 0;
	}
	let totalTentacles = 0;
	monsters.forEach((monster) => {
		totalTentacles += monster.tentacles;
	});
	return totalTentacles / monsters.length;
};

export const numberOfMonstersWithWings = (monsters: Monster[]): number => {
	return monsters.filter((monster) => monster.hasWings).length;
};

export const getAllNoWingedMonster = (monsters: Monster[]): Monster[] => {
	return monsters.filter((monster) => !monster.hasWings);
};
