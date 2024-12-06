
import { averageAge, averageNumberOfHobbies, oldestUser, youngestUser, userWithMostHobbies } from "./func/user-functions";
import { numberOfColors, commonColor } from "./func/dog-functions";
import { prettyPrintMonster, averageMonsterAge, averageNumberOfTentacles } from "./func/monster-functions.ts";
import { Dog, Monster, User } from "./func/type";

const users: User[] = [
	{ name: "Stina", hobby: ["läsa böcker"], age: 67 },
	{ name: "Lisa", hobby: ["åka skidor"], age: 26 },
	{ name: "Mio", hobby: ["spela rollspel", "spela brädspel"], age: 22 },
	{ name: "Olle", hobby: ["sportklättring", "vandra", "sticka", "virka"], age: 38 },
	{ name: "Leo", hobby: ["matlagning", "bakning"], age: 17 },
];

console.log(`Vi har ${users.length} stycken användare.`);
console.log(`Medelåldern på alla användare är ${averageAge(users)}`);
console.log(`Medelantalet hobbies per användare är ${averageNumberOfHobbies(users)}`);

const maxHobbyUser = userWithMostHobbies(users);
console.log(`Den personen med flest hobbies är ${maxHobbyUser?.name} med ${maxHobbyUser?.hobby.length} hobbies.`);

const oldest = oldestUser(users);
const youngest = youngestUser(users);
console.log(`Den äldsta personen är ${oldest?.name} och den yngsta är ${youngest?.name}.`);

const dogs: Dog[] = [
	{ name: "Nisse", color: "brown" },
	{ name: "Fiffi", color: "white" },
	{ name: "Fluffe", color: "black" },
	{ name: "Hoppe", color: "beige" },
	{ name: "Pluto", color: "gray" },
	{ name: "Winter", color: "gray" },
	{ name: "Rolf", color: "brown" },
	{ name: "Benny", color: "brown" },
	{ name: "Krister", color: "brown" },
];

console.log(`Vi har ${dogs.length} stycken hundar.`);
console.log(`Hundarna har ${numberOfColors(dogs)} antal unika färger.`);
console.log(`Den vanligaste färgen bland alla hundar är: ${commonColor(dogs)}.`);

let monsters: Monster[] = [
	{ name: "Florg", age: 1266, tentacles: 29, eyes: 666, hasWings: true },
	{ name: "Smirch", age: 78, tentacles: 68, eyes: 2, hasWings: false },
	
];

console.log(`Vi har ${monsters.length} stycken monster.`);
console.log(`Medelåldern på alla monster är ${averageMonsterAge(monsters)}`);
console.log(`Medelantalet tentakler för alla monster är ${averageNumberOfTentacles(monsters)}`);


prettyPrintMonster(monsters[0]);
prettyPrintMonster(monsters[1]);
