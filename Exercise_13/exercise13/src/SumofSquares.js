import React from "react";


function Component({ num1, num2 }) {
    const sumOfSquares = num1 * num1 + num2 * num2;


    return <p>The sum of squares of {num1} and {num2} is: <strong>{sumOfSquares}</strong></p>;
}


export default Component;


