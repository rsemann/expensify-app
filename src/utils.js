console.log("utils.js is running");

export const square = (x) => x * x; //export inline

export const add = (a, b) => a + b;

// export { square, add, subtract as default };  //export them by name

//named expors - default export = exports

// const subtract = (a, b) => a -b;
export default (a, b) => a -b;