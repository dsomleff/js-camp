let person = {
    firstName: 'Ju',
    lastName: 'Ju',
    getFullName: function () {
        let fullName = this.firstName + ' ' + this.lastName;
        return fullName
    }
}

let logName = function (lang1, lang2) {
    console.log('Logged ' + this.getFullName());
    console.log('args: ' + lang1 + lang2);
    console.log('-----');
}

let logPerson = logName.bind(person);

logPerson('en');

logName.call(person, 'en', 'ju');
logName.apply(person, ['en', 'ju']);

(function (lang1, lang2) {
    console.log('Logged ' + this.getFullName());
    console.log('args: ' + lang1 + lang2);
    console.log('-----');
}).apply(person, ['Boo', 'Boo']);


// function borrowing
let person2 = {
    firstName: 'Buba',
    lastName: 'Bu',
}

console.log(person.getFullName.apply(person2)); // or call

// function curring
function multiply(a, b) {
    return a * b;
}

let multiplyBy2 = multiply.bind(this, 2, 2);
console.log(multiplyBy2(3));
