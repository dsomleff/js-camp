const items = []
let item = items[0]

// Truthy - Values that resolve to true in a boolean context
// Falsy - Values that resolve to false in a boolean context
// We use them when we trying to check if smth exists 
// Falsy values - false, 0, empty string, null, undefined, NaN

if (item) {
    console.log('Item found');
} else {
    console.log('Item NOT found');
}