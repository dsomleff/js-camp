var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);

var jane = {
    firstname: 'Jane'   
}

jane.__proto__ = person;
console.log(jane.getFullName());

person.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;   
}

console.log(john.getFormalFullName());
console.log(jane.getFormalFullName());

// This code for browser only
let j = {};
let ju = [];
let juk = '';
// now go into browser and call any variables above. 
// You will see all build in methods available 
// for objects, arrays and strings by prototype chain
