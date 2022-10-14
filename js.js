/*JS EXERCISES

            21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
            22) Create an object with properties such name, surname, email
            23) Delete the email property from the previously created object
            24) Create an array with 10 strings in it
            25) Print in the console every string from the previous array
            26) Create an array with 100 random numbers in it
        27) Write a function to get the maximum and minimum values from the previously created array
            28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays as parameters and returns the longest one
        30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values*/

let x = "john";
let y = "doe";
console.log(x + " <> " + y);

let object = {
  name: "agata",
  surname: "orminska",
  mail: "ao@mail.com",
};
console.log(object);

delete object.mail;
console.log(object);

let arr1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

console.log(arr1);

/*EXERCISE 26 this is a random number array:*/

let Arr = [];
let maxNumber = 100;
for (let i = 0; i < 100; i++) {
  let randomNumber = [Math.floor(Math.random() * maxNumber)];
  Arr.push(randomNumber);
}
console.log(Arr);

/*EXERCISE 27 Write a function to get the maximum and minimum values from the previously created array */

/*EXERCISE 28 Create an array of arrays, in which every array has 10 random numbers*/
let kingOfArrays = [];

for (let i = 0; i < 5; i++) {
  let littleArr = [];
  for (let a = 0; a < 10; a++) {
    littleArr.push(Math.floor(Math.random() * 100));
  }

  kingOfArrays.push(littleArr);
}
console.log(kingOfArrays);

/*EXERCISE 29 Create a function that gets 2 arrays as parameters and returns the longest one*/

arrA = [1, 2, 3, 4, 5, 6, 7];
arrB = [0, 2, 4, 6, 8];

let whichIsLonger;
if (arrA.length > arrB.length) {
  return console.log(arrA);
} else {
  arrB;
}

console.log(whichIsLonger);

/*EXERCISE 30 Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values*/
