let numbers = [1,2,3,4,5,6,7,8];
// let max = Math.max(...numbers);
// console.log(max);

// function maxNumber(numbers){
//     let max = Math.max(...numbers);
//     return max;
// }

// let bigNumber = maxNumber(numbers);
// console.log(bigNumber);

let maxNumber = numbers=>Math.max(...numbers);
// console.log(maxNumber([1,2,3,4,5,6,67]))

// let number = numbers.forEach(number=>console.log(number));
// console.log(number)


let bigNumber = numbers.filter(number=>number>5);
let bigNum = numbers.find(number=>number>5);
let sum = numbers.reduce((p,c)=>p+c,0);
// let length = numbers.length;
// let avg = sum/length;
// console.log(avg)

// write avgFunction

function getAvg(numbers){
    let length = numbers.length;
    let result = sum/length;
    return result
}

// console.log(getAvg(numbers));


let aveNumber = numbers.reduce((p,c)=>p+c,0)/numbers.length;
console.log(aveNumber)

// console.log(bigNum);
// console.log(bigNumber)
