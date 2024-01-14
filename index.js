/* Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age. */

/* Question 1a
 Used ages provided; gave last and first element a variable. 
-1 for last element and 0 for first element. 
made an equation for result and then printed.
*/
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let lastIndex = ages.length - 1;
let result = ages[lastIndex] - ages[0];
console.log(result);  

/* Question 1b
Put everthing in a set of curly brackets so I could use let again. 
Added an extra element and then repeated the process to make sure the array is dynamic
*/

{ const ages = [3, 9, 23, 64, 2, 8, 28, 93, 49];
const lastIndex = ages.length - 1;
const result = ages[lastIndex] - ages[0];
console.log(result); 
}

/* Queston 1c
 I used a for loop to be able to calculate the average age.
I created a function calculateAge 
*/

function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
  // Test the function 
  {const ages = [3, 9, 23, 31, 0, 5, 28, 93];
  const average = calculateAverage(ages);
  
  console.log("Ages:", ages);
  console.log("Average:", average); 
  //double check by opening in browser. if it was not even we could do tofixed to add the decimals.
  }


/*question 2
.a I used a for loop to calculate the average number of letters per name. 
*/

const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

let totalLetters = 0;

for (let i=0; i < names.length; i++) {
    const currentNameLength = names[i].length; 

    totalLetters += currentNameLength; 
}

const numberOfNames = names.length;

const averageLetterPerName = totalLetters / numberOfNames;

console.log(averageLetterPerName); 


{ 
}
/* b.






/*question 3 
You can access the last element in an array by subtracting 1 from the length of the array. 
*/


/* question 4 
You can access the first element by referring to its index number which is 0.
*/


/*question 5
*/
{ let namesArray = ["Kelly", "Sam", "Kate"];
let nameLengths = [5, 3, 4];

for(var i=0; i<namesArray.length; i++)
nameLengths.push (namesArray[i].length);

console.log('namesArray: ' );
console.log('nameLengths: ' );

let totalLengths = 0;

for(var i=0;i<nameLengths.length;i++)
	totalLengths += nameLengths[i];

    console.log('Sum of all elements: ',totalLengths);
}
/*question 6

*/

{let nameLengths = [5, 3, 4];

let sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log(sum); }



/* question 7
I created a fat arrow fucntion with a and b as the parameters. I then had a 
for loop and printed out the result which was 'HelloHelloHello'. 
*/

let someFunction = (a,b) => {
    let result = ' ';
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
};
console.log(someFunction('Hello', 3));


/*question 8
I created a fat arrow function with template literals. 
*/
{ let createFullName = (firstName, lastName) => `${'Eduardo'} ${'Lechuga'}`;

console.log(createFullName('Eduardo', 'Lechuga')); 
}

/* question 9
I startedd of by making an array. 
I then created an if statement for it.
I then printed out the function with the sum of the numbers 
in the array in the value
*/

const fakeArray = [40, 50, 60];
const sum = (fakeArray);
function isGreaterThanOneHundred(value) {
    if (value > 100) {
        return true;
    } else {
        return false;
    }
}
 console.log(isGreaterThanOneHundred(150));
/*question 10
i assigned a variable to the array and then used the calculate average function and 
then pritned out the code and got 25. 
*/

const madeUpArray = [10, 20, 30, 40];
const average = calculateAverage(madeUpArray);
console.log(average);


/* question 11
*/
{ const arr1 = [100, 200, 300, 400, 500];
const arr2 = [4, 2, 30]; }

function compareAverages(arr1, arr2) {
    const average1 = calculateAverage(arr1);
    const average2 = calculateAverage(arr2);

    if (average1 < average2) {
        return true;
       } else {
       return false;
       }
    }
  

console.log('arr1' > 'arr2');


/* question 12
*/

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
  }

  isHotOutside = true;
  moneyInPocket = true;

  console.log(isHotOutside && moneyInPocket);

  /* question 13 
  I made a fucntion to be able to find out the base and exponent of an equation.
  base and exponent are the parameters and in the consolle.log you can change what 
  numbbers to use.
  */ 

  const powerfunction = (base, exp) => {return base**exp};
  console.log(powerfunction(2,2));
