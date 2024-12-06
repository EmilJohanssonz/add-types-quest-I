
import { User } from "./type";

export const averageAge = (allUsers: User[]): number => {
	if (!allUsers || allUsers.length === 0) {
		return 0;
	}
	let totalAge = 0;
	allUsers.forEach((user) => {
		totalAge += user.age;
	});
	return totalAge / allUsers.length;
};

export const averageNumberOfHobbies = (allUsers: User[]): number => {
	if (!allUsers || allUsers.length === 0) {
		return 0;
	}
	let totalHobbies = 0;
	allUsers.forEach((user) => {
		totalHobbies += user.hobby.length;
	});
	return totalHobbies / allUsers.length;
};

export const userWithMostHobbies = (allUsers: User[]): User | null => {
	if (!allUsers || allUsers.length === 0) return null;

	return allUsers.reduce((maxUser, user) =>
		user.hobby.length > maxUser.hobby.length ? user : maxUser
	);
};

export const oldestUser = (allUsers: User[]): User | null => {
	if (!allUsers || allUsers.length === 0) return null;

	return allUsers.reduce((oldest, user) =>
		user.age > oldest.age ? user : oldest
	);
};

export const youngestUser = (allUsers: User[]): User | null => {
	if (!allUsers || allUsers.length === 0) return null;

	return allUsers.reduce((youngest, user) =>
		user.age < youngest.age ? user : youngest
	);
};
