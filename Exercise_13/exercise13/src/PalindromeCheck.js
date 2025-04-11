import React, { useState } from "react";


function Palindrome() {
    const [text, setText] = useState("");


    const reversedText = text.split("").reverse().join("");
    const isPalindrome = text.toLowerCase() === reversedText.toLowerCase();


    return (
        <div>
            <input
                type="text"
                placeholder="Enter text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>Reversed: {reversedText}</p>
            <p>{text && (isPalindrome ? "It's a palindrome!" : "Not a palindrome.")}</p>
        </div>
    );
}


export default Palindrome;
