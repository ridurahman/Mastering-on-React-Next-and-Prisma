//Q3-a
function checkPrimeNumber(num){
    let number = Math.abs(num);
    for(let i=2; i<=number/2;i++){
        if(number%i==0){
            return false;
        }
    }
    return true;
}

//Q3-b
var resultPrime = checkPrimeNumber(101);

console.log(`The given number is prime: ${resultPrime}`);