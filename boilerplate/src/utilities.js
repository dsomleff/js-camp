// Named export for different functions, classes.
// Default export for big thing like class.

/* Alternative way way to export */
const add = (a, b) => a + b;
const name = 'Juka';
const square = (x) => x * x;

console.log('from code');
export { add, name, square as default }

/* One way to export */
// export  const add = (a, b) => a + b;

// export  const name = 'Ju';

// const square = (x) => x * x;
// export default square;
