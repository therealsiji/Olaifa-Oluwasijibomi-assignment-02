// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
 let numbers = [1,2,3,4,5,6];
 let sum = 0;
 function sumOfNumbers(arrayOfNumbers) {
     for(let i = 0 ; i < arrayOfNumbers.length; i++){
         sum += arrayOfNumbers[i];
         console.log(sum);
     }
   return arrayOfNumbers.length;
       
 }
 sumOfNumbers(numbers);

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
 let checkEven = [1,2,4,5,6,7,8,9,10];
 function countEvenNumbers(arrayOfNumbers) {
     // return arrayOfNumbers.length;
     checkEven.filter((number)=>{
         number % 2 == 0
         console.log(`Even numbers are: ${number}`)
     })
   return arrayOfNumbers.length;
     
 }
 countEvenNumbers(checkEven);

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
 let celciusTemp = [22,13,44,225,67];
 function celsiusToFahrenheit(arrayOfNumbers) {
     celciusTemp.forEach((cel,index)=>{
         let fahrenheit = Math.trunc((cel)*(9/5) + 32);
         console.log(`${index}. ${cel} degree celcius in fahrenheit is ${fahrenheit} degree`);
     })
      return arrayOfNumbers;
 }
 celsiusToFahrenheit(celciusTemp);


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================


 