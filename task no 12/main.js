// main.js

import { user, colors, greet } from './data.js';
import { sum, multiply } from './utils.js';

console.log(user); // { name: 'Lily', age: 30 }
console.log(colors); // ['red', 'green', 'blue']
console.log(greet(user.name)); // Hello, Lily!

console.log("Sum:", sum(5, 3)); // 8
console.log("Product:", multiply(4, 2)); // 8
