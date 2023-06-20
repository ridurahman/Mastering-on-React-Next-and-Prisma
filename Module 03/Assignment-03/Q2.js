//Q2-a
function squareRootOfSumOfSquares(numberArray) {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    sum += Math.pow(numberArray[i], 2);
  }
  return Math.sqrt(sum);
}

//Q2-b
let newArray = [3, 4 , 5 , 1, 2, 3];
let squareRoot = squareRootOfSumOfSquares(newArray);

console.log(`Square root of the sum of the squares of all the numbers is: ${squareRoot}`);
