

let patients = [
    { id: 1, name: "Pranav", age: 39 },
    { id: 2, name: "Tejas", age: 47 },
    { id: 3, name: "Aakash", age: 21 },
    { id: 4, name: "Sidhesh", age: 54 },
    { id: 5, name: "Tejaswwini", age: 23 },
    { id: 6, name: "Z", age: 61 },
    { id: 7, name: "X", age: 69 },
    { id: 8, name: "Y", age: 49 }
];


function displayPatients(data) {
    let table = document.getElementById("patientTable");
    table.innerHTML = "";
    data.forEach(patient => {
        table.innerHTML += `<tr><td>${patient.id}</td><td>${patient.name}</td><td>${patient.age}</td></tr>`;
    });
}


function sortByAgeDesc() {
    let sorted = [...patients].sort((a, b) => b.age - a.age);
    displayPatients(sorted);
}


function checkPatientId() {
    let pid = parseInt(document.getElementById("checkId").value);
    let exists = patients.some(patient => patient.id === pid);
    alert(`P-Id ${pid} exists: ${exists}`);
}


function filterByAge() {
    let min = parseInt(document.getElementById("minAge").value);
    let max = parseInt(document.getElementById("maxAge").value);
    let filtered = patients.filter(patient => patient.age >= min && patient.age <= max);
    displayPatients(filtered);
}


displayPatients(patients);




