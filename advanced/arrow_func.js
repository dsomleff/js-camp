const test = (num) => {
    return num * num
}

const square = (num) => num * num


console.log(square(5))


const people = [{
    name: 'Ju',
    age: 18
}, {
    name: 'Dusya',
    age: 65
}, {
    name: 'Valeric',
    age: 1.5
}]

const under = people.filter((person) => person.age < 30)
const ape = people.find((person) => person.age === 1.5)

console.log(under);
console.log(ape.name);