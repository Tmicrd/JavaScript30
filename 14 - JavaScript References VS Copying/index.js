// 1. Array
let arr = ["screen", "books", [2, 3]];

// Reference
// arr1 is the reference of arr
// change arr1, arr is changed too
let arr1 = arr;
arr1[1] = "keyboard";

console.log("arr: ", arr); // ["screen", "keyboard"];
console.log("arr1: ", arr1); // ["screen", "keyboard"];

// Copy
let arr2 = arr.slice();
let arr3 = [].concat(arr);
let arr4 = [...arr]; // shallow copy / deep copy
let arr5 = Array.from(arr);

// 2. Object
let obj = { name: "Tony", hobby: { Monday: "running", Friday: "swimming" } };

// Reference
let obj1 = obj;

// Copy
let obj2 = Object.assign({}, obj, { hometown: "XXXXXX" }); // shallow copy
//  {} is the target object, which combines all the objects after it.

let obj3 = JSON.parse(JSON.stringify(obj)); // deeep copy
