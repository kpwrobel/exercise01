const LOCALNAME = "tablePeopleStorage"
var allPersons = [];

window.onload = () => {
    const peopleTable = document.getElementById("peopleTable");
    const thead = document.getElementById("tableBody");


    const nameFromInput = document.getElementById('nameInput');
    const surnameFromInput = document.getElementById('surnameInput');
    const genderFromInput = document.getElementsByTagName("select")[0];
    const mobileFromInput = document.getElementById("mobileInput");
    const emailFromInput = document.getElementById("emailInput");
    let submitButton = document.getElementsByTagName("button")[0];


    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        var person = {
            name: nameFromInput.value,
            surname: surnameFromInput.value,
            gender: genderFromInput.value,
            mobile: mobileFromInput.value,
            email: emailFromInput
        }
        console.log(person);
    })


    var form = document.querySelector("form")
    form.onSubmit = (elem) => {
        debugger
        elem.preventDefault();
    }

}

function generateList(tab) {

}