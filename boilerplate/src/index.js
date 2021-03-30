// import {add} from'./utilities.js'
// or short form
import otherSquare, { add, name } from './utilities'
import scream from './scream'

console.log(add(32, 3));

console.log(scream(`i love ${name}`));

console.log(otherSquare(3));

// ========= Rest Parameter================//
const calculateAverage = (thing, ...numbers) => {
    // return (number1 + number2) / 2;
    let sum = 0;
    numbers.forEach((num) => sum += num);
    // return sum / numbers.length;
    const average = sum / numbers.length;
    return `The average ${thing} is ${average}`;
};
console.log(calculateAverage('age', 0, 100, 88, 64));

// ================ Spread Operator ======================//
const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`);
    console.log(`Coach: ${coach}`);
    console.log(`Team: ${players.join(', ')}`);

};

const team = {
    team: 'Liberty',
    coach: 'JuJu',
    players: ['Juka','Buka', 'Duka']
};

// printTeam('Liberty', 'JuJu', 'Juka','Buka', 'Duka');
printTeam(team.name, team.coach, ...team.players);

/**
 * How to copy array with Spread Operator.
 */
const cities = ['Odessa', 'Amsterdam', 'Vienna'];
const citiesCopy = [...cities, 'Kiev'];
console.log(cities);
console.log(citiesCopy);

/**
 * How to add element to array without push
 */
let citiesPush = ['Odessa', 'Amsterdam', 'Vienna'];
citiesPush = [ 'Kiev', ...citiesPush];
console.log(citiesPush);
