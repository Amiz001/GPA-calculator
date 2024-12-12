const moduleName = document.getElementById("name").textContent;
const moduleCredit = document.getElementById("credit").value;
const moduleGrade = document.querySelector("select").value;
const modules = document.getElementById("modules");
const gpaDisplay = document.getElementById("gpaDisplay");

let gpa = 0.00;
let moduleCount = 0;
let value = 0.0;
//gpa = parseFloat(window.prompt("Enter current GPA: "));
gpaDisplay.textContent = gpa.toFixed(2);

function calcGPA(){
    moduleCount++;
    value =+ moduleCredit * moduleGrade;
    gpa /= moduleCount;

    gpaDisplay.textContent = gpa.toFixed(2);

    const moduleDisplay = document.createElement("p");
    moduleDisplay.textContent = `${moduleName} ${moduleCredit} ${moduleGrade}`;
    modules.appendChild(moduleDisplay);
}