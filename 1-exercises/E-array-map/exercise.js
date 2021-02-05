// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// Solution 1
function multiply100(num) {
    return num*100;
}

let sol1 = numbers.map(multiply100);
console.log(sol1);

// Solution 2
let sol2 = numbers.map(function multiply100(num) {
    return num*100;
});
console.log(sol2);

// Solution 3
let sol3 = numbers.map(function (num) {
    return num*100;
});
console.log(sol3);

// Solution 4
let sol4 = numbers.map((num) => {
    return num*100;
});
console.log(sol4);