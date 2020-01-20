const LOCALNAME = "tablePeopleStorage";
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

    let testList = [{
            name: "Wojtek1222312",
            surname: "Wojcik",
            gender: "male",
            phone: 123123123,
            mail: "wojcik.wojtek@yahoo.pl"
        },
        {
            name: "Wojtek1",
            surname: "Wojcik12",
            gender: "male",
            phone: 123123123,
            mail: "wojcik.wojtek@yahoo.pl"
        },
        {
            name: "Wojtek2sadsad",
            surname: "Wojcik123",
            gender: "male",
            phone: 123123123,
            mail: "wojcik.wojtek@yahoo.pl"
        }
    ];

    let testJson = JSON.stringify(testList);
    console.log(testJson);

    let sourceArray = JSON.parse(testJson);
    console.log(sourceArray);

    function generateList(tab) {
        tab.forEach((elem) => {
            let tr = document.createElement("tr");
            for (var key in elem) {
                var valueElement = elem[key];
                console.log("Wartosc " + key + "Druga ", valueElement);
                createTD(tr, valueElement);
            }

        });
    }
    generateList(sourceArray);

    function createTD(destination, value) {
        let td = document.createElement("td");
        td.innerText = value;
        destination.appendChild(td);
    }
}