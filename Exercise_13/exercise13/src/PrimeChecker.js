import React from "react";


function PrimeCheck({ number }) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }


    return <p>{number} is {isPrime(number) ? "a Prime Number" : "not a Prime Number"}.</p>;
}


export default PrimeCheck;


