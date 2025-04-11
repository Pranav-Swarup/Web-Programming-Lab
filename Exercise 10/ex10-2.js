document.getElementById("main-title").textContent = "New Title!";


let usernameField = document.getElementsByName("username")[0];
usernameField.value = "Pranav Swarup";


let genderRadios = document.getElementsByName("gender");
for (let radio of genderRadios) {
    if (radio.checked) {
        console.log("Selected Gender:", radio.value);
    }
}


let paragraphs = document.getElementsByTagName("p");
console.log("Total <p> elements:", paragraphs.length);


let listItems = document.getElementsByTagName("li");
for (let item of listItems) {
    console.log("List item:", item.textContent);
}


let inputFields = document.getElementsByClassName("input-field");
for (let field of inputFields) {
    field.style.backgroundColor = "lightblue";
}


let firstInfoPara = document.querySelector(".info");
firstInfoPara.textContent = "This is the first info paragraph";


let firstGenderRadio = document.querySelector("input[name='gender']");
if (firstGenderRadio) firstGenderRadio.checked = true;


let allInfoParagraphs = document.querySelectorAll(".info");
allInfoParagraphs.forEach(para => console.log("Info Paragraph:", para.textContent));


let allHobbies = document.querySelectorAll(".hobby");
allHobbies.forEach(checkbox => {
    checkbox.checked = true;
    console.log("Checked Hobby:", checkbox.value);
});


