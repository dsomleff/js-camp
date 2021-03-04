// Named export for different functions, classes.
// Default export for big thing like class.

/* Alternative way way to export */
const add = (a, b) => a + b;
const name = 'Ju';
const square = (x) => x * x;

export { add, name, square as default }

/* One way to export */
// export  const add = (a, b) => a + b;

// export  const name = 'Ju';

// const square = (x) => x * x;
// export default square;
