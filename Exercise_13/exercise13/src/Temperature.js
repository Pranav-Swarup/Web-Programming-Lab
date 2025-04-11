import React from "react";


function Component({ temp, scale }) {
    const convertedTemp = scale === "C"
        ? (temp * 9/5 + 32).toFixed(2) + " °F"
        : ((temp - 32) * 5/9).toFixed(2) + " °C";


    return <p>Converted Temperature: {convertedTemp}</p>;
}


export default Component;


