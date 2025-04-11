import React, { useState } from "react";


function Component() {
    const [randomNumber, setRandomNumber] = useState(null);


    const generateRandomNumber = () => {
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
    };


    return (
        <div>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
            {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
        </div>
    );
}


export default Component;