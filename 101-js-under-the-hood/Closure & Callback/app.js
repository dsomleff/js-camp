function makeGreet(lang) {
    return function (firstName, lastName) {
        if (lang === 'eng') {
            console.log('Hi ' + firstName + lastName)
        }
        
        if (lang === 'es') {
            console.log('Hola ' + firstName + lastName);
        }
    }
}

var greetEng = makeGreet('eng');
var greetSpa = makeGreet('es');

greetEng('Ju', 'Ju');
greetSpa('Boo', 'Boo');

// another example of a closure
function sayHiLater() {
    let greet = 'Hi';
    
    setTimeout(function () {
        console.log(greet);
    }, 3000);
}
sayHiLater();


// callback
function tellMeWhenDone(callback) {
    let a = 1000;
    let b = 2000;
    
    callback();
}

tellMeWhenDone(() => {
    alert('I am done');
});

tellMeWhenDone(() => {
    alert('Yeah');
});
