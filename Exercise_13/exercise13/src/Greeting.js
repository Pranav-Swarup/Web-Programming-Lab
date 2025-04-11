import React from "react";


function Component({ isMorning }) {
    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[new Date().getDay()];


    return <p>{isMorning ? "Good Morning" : "Good Evening"}<br></br>Today is: <strong>{currentDay}</strong></p>;
}

export default Component;


