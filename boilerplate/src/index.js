// import {add} from'./utilities.js'
// or short form
import otherSquare, { add, name } from './utilities'
import scream from './scream'

console.log(add(32, 3));

console.log(scream(`i love ${name}`));

console.log(otherSquare(3));

// Rest Parameter
const calculateAverage = (thing, ...numbers) => {
    // return (number1 + number2) / 2;
    let sum = 0;
    numbers.forEach((num) => sum += num);
    // return sum / numbers.length;
    const average = sum / numbers.length;
    return `The average ${thing} is ${average}`;
};
console.log(calculateAverage('age', 0, 100, 88, 64));

// Task
const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`);
    console.log(`Coach: ${coach}`);
    // console.log(`Team: ${players}`);
    console.log(`Team: ${players.join(', ')}`);
};
// printTeam('Liberty', 'JuJu', ['Juka','Buka', 'Duka']);
printTeam('Liberty', 'JuJu', 'Juka','Buka', 'Duka');
