const moduleName = document.getElementById("name");
const moduleCredit = document.getElementById("credit");
const moduleGrade = document.querySelector("select");
const modules = document.getElementById("modules");
const gpaDisplay = document.getElementById("gpaDisplay");

let moduleCount = 0;
let value = 0.0;
let gpa = parseFloat(window.prompt("Enter current GPA:", "0.00")) || 0.0;

value = Number(gpa);
gpaDisplay.textContent = gpa.toFixed(2);

function calcGPA(event){
    if (event) {
        event.preventDefault();
    }

    const credit = Number(moduleCredit.value);
    const grade = Number(moduleGrade.value);
    const name = moduleName.value;

    moduleCount += credit;
    value += credit * grade;
    gpa = value / moduleCount;
    
    gpaDisplay.textContent = gpa.toFixed(2);

    const moduleDisplay = document.createElement("p");
    moduleDisplay.textContent = `Module:${name} | Credit:${grade} | Grade:${credit}`;
    modules.appendChild(moduleDisplay);
}

