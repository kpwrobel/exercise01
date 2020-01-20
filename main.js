const LOCALNAME = "tablePeopleStorage";
var allPersons = [];

window.onload = () => {
  const peopleTable = document.getElementById("peopleTable");
  const tableBody = document.getElementById("tableBody");

  generateList(sourceArray,tableBody);


};

let testList = [
  {
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

function generateList(tab,parent) {
  tab.forEach((elem) => {
    var tr1 = document.createElement("tr");
    for (var key in elem) 
    {
        let valueElement = elem[key];
        createTD(tr1,valueElement)
    }
    console.log("-------------------------")
    parent.appendChild(tr1);
  });
}

function createTD(destination, value) {
  let td = document.createElement("td");
  td.innerText = value;
  destination.appendChild(td);
}
