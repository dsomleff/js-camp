let name = '    Juka Ju'

// length property
console.log(name.length);

// convert into uppercase
console.log(name.toUpperCase());

// Includes
let password = 'abc123password021'
console.log(password.includes('password'));

// trim
console.log(name.trim());

//Challenge
function isValidPassword(password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('avd2'));
console.log(isValidPassword('avd2345435esfs'));
console.log(isValidPassword('avd2passwordsdfgd'));

