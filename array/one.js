// First ways how to declared array 
let a = [ 2, 3, 4, 5, 6, 'akbar', "arzo"];
// console.log(a);

// Second ways how to  declared array 
let b = new Array(1, 2, 3, 5, "arzo", "mummy", "papa", "I love you mummy");
// console.log(b);

// Access of array and add value in array
// console.log(a[1]);
a[5]="nagma" 
// console.log(a);


// Array methods 
// Push methods in last indexs
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.push(7, 8);
// console.log(arr);

// pop methods in last indexs 
let arr2 = [1, 3, 2, 5, 4]; 
arr2.pop();
// console.log(arr2);

// shift first indexs remove 
let g = arr2.shift();
// console.log(g);

// unshift adding value from first index. 
arr2.unshift(8, 7, "Nagma");
// console.log(arr2);

// For marge CONCAT
let a1 = [1, 2, 3, 4, 5];
let b1 = [6, 7, 8, 9, 0];
let c1 = a1.concat(b1);
// console.log(c1);

let d = c1.join();

// Reverse
// c1.reverse();
console.log(d);
// console.log(d.indexOf(4));


// slice 
let arr5 = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr5.slice(3, 6));

// splice
let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr9.splice(2, 2, 99, 33);
console.log(arr9);