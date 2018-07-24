function isPrime(num) { //javascript function
    var isprimeno = true //variable declaration
    for (var i = 2; i <= num / 2; i++) { //for loop
        if (num % i == 0) { //conditions
            isprimeno = false;
            return isprimeno; // return statment if no. not prime
        }
    }

    return isprimeno; // return statment if no. is prime
}

console.log(isPrime(98)); //Outputs and function Calling
console.log(isPrime(97));
console.log(isPrime(3));