//Question 1

const ages = [3, 9, 23, 64, 2, 8, 28, 93];
//Q1.A
let first1 = ages[0];
console.log(first1);

let last1 = ages[ages.length - 1];
console.log(last1);

let subTract1 = last1 - first1;
console.log(`The new total is: ${subTract1}.`);

//Q1.B
ages.push("42");
console.log();

let first2 = ages[0];
console.log(first2);

let last2 = ages[ages.length - 1];
console.log(last2);

let subTract2 = last2 - first2;
console.log(`The new total with added age is: ${subTract2}.`);

// Would this work as an iterative (loop) function?
//   for? (let first[i] = ages[0];
//     console.log(first[i]);

//       let last[i] = ages[ages.length - 1];
//       console.log(last[i]);

//       let subTract[i] = last[i] - first[i];
//     console.log(subTract[i]);

//Q1.C
// let agesAverage = (total sum of all integers in ages array) / ages.length;
// console.log(agesAverage); = 30.2  (272 / 9) > Math.round()

let agesSum = 0;
for (let i = 0; i < ages.length; i++) {
  agesSum += ages[i];
}

let agesAverage = Math.round(agesSum / ages.length);

console.log(`The sum is: ${agesSum}. The average is: ${agesAverage}.`);
// The numbers here do not add or average out as expected. They are sum - 23042, and average of 2560. I'm not sure where those values are being added in, as the code appears to be set up correctly according to online resources I checked against with similar examples of the same code. :/
//  It could be that an forEach() on each item in the array [i] could be done to pull that item, then add to a new value of "addArray" to get a total created, then divide by array.length?


//Question 2 - Names Array and Averaging Letters

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let nameNum = names.map(names => names.length);

console.log(names);
console.log(nameNum);

let namesSum = 0;

for (i = 0; i < names.length; i++) {
  namesSum = namesSum + names[i].length;
}
console.log("The average number of letters per name in the array is: " + Math.round(namesSum / names.length));

// Okay, but why did the average and seek-and-find for names.length work and not for the ages.length array in Question 1???


// Q2.B - Loop for concatenating names
let catNames = "";

for (i = 0; i < names.length; i++) {
    catNames += names[i] + ", ";
    }
// This leaves a remaining "," at the end of the list. How to remove? Maybe a special if/else statement for if it is the first/last item in array?
  console.log(catNames);



//Question 3 - Last Element in an Array
// const last = arr[arr.length - 1];


//Question 4 - First Element in an Array
// const first = arr[0];

// These questions should really be Questions 1 and 2 to prepare you for those at the start of the assignment ;)



//Question 5 - New Name Lengths and Loop
const nameLengths = [];
for (i = 0; i < names.length; i++) {
  nameLengths[i] = names[i].length;
}
console.log(nameLengths);


//Question 6 - New Name Lengths Sum
let namlenSum = 0;
for (i = 0; i < nameLengths.length; i++){
  namlenSum = namlenSum + nameLengths[i];
}
console.log("The sum for the new array is " + namlenSum);


//Question 7 - Concatenate Two Parameters
let twoParam = (word, n) => {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
}
console.log(twoParam("Hello ", "3"));


//Question 8 - First and Last Name
let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
//  Using back ticks (``) instead keeps space, no need for concatenation ala:   firstName + " " + lastName
console.log(createFullName("Jessica", "Helmers"));


//Question 9 - True Sum of 100 Array

// **New** function "is < 100"
// Remember -------------------
// let namlenSum = 0;
// for (i = 0; i < nameLengths.length; i++){
//   namlenSum = namlenSum + nameLengths[i];
// }
// Need to add in if/else statements for < and > 100

function isMoreThan100(arr) {
  
  let great100sum = 0;
 
  for (i = 0; i < arr.length; i++){
  great100sum = great100sum + arr[i];
} if (great100sum > 100){
  return true;
} else {
  return false;
}
}


//Question 10 - Average new Greater Than 100 Array template
// Remember ----------------
// let nameNum = names.map(names => names.length);

// console.log(names);
// console.log(nameNum);

// let namesSum = 0;

// for (i = 0; i < names.length; i++) {
//   namesSum = namesSum + names[i].length;


function great100Average(arr) {

let greater100Sum2 = 0;

for (i = 0; i < arr.length; i++){
  greater100Sum2 = greater100Sum2 + arr[i];
}
  return (greater100Sum2 / arr.length);
}



//Question 11 - Two Arrays Average, Who Will Win?
// Remember: "function" is a JS term, verb, and proper noun :)

function compareArrayAverages (arr1, arr2){
  if (average(arr1) > average(arr2)){
    return true;
  } else {
    return false;
  }
}


// Question 12 - Buy a Drink
function willBuyDrink (isHotOutside, moneyInPocket){
  if (isHotOutside && moneyInPocket > 10.50){
    return true;
  } else {
    return false;
  }
}


//Question 13 - Solve a Problem (Fibonacci Sequence Generator)

function fibonacciGenerator (n) {
  let fibOutput = [];
  if (n === 1){
    fibOutput = [0];
  } 
  else if (n === 2){
    fibOutput = [0, 1];
  }
  else {
    fibOutput = [0, 1];

    for (let i = 2; i < n; i++){
    fibOutput.push(fibOutput[fibOutput.length - 2] + fibOutput[fibOutput.length - 1]);
    }
  }
return fibOutput;
}

fibOutput = fibonacciGenerator(50);
  console.log(fibOutput);
