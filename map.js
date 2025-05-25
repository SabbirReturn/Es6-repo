let numbers = [4,5,6,7,8,9];

let double = numbers.map(Number=>Number*2)
// console.log(double)

let bonus = numbers.map(num=>num+5);
// console.log(bonus)

let friends = ['Sabbir','Hasan','Robin'];
let length = friends.map(friend=>friend.length);
console.log(length);

let firstLetter = friends.map(friend=>friend);
console.log(firstLetter);
