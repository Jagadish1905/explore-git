// var myObject = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// var jsonString = JSON.stringify(myObject);

// sessionStorage.setItem("myObject", jsonString);

// var storedJsonString = sessionStorage.getItem("myObject");

// var storedObject = JSON.parse(storedJsonString);

// console.log(storedObject.name);
// console.log(storedObject.age);
// console.log(storedObject.city);

// var myArray = [1, 2, 3, 4, 5];

// var jsonArrString = JSON.stringify(myArray);

// sessionStorage.setItem("myArray", jsonArrString);
// var storedJsonArrString = sessionStorage.getItem("myArray");

// var storedArray = JSON.parse(storedJsonArrString);

// console.log(storedArray[0]);
// console.log(storedArray[1]);
// console.log(storedArray[2]);

// var myNumber = 42;

// sessionStorage.setItem("myNumber", myNumber);
// var storedNumber = sessionStorage.getItem("myNumber");
// console.log(typeof storedNumber)
// storedNumber = parseFloat(storedNumber);

// console.log(storedNumber);

let fnameField = document.getElementById("fname")
let lnameField = document.getElementById("Lname")
let ageField = document.getElementById("age")
let submit = document.getElementById("submit-btn")

fnameField.value = localStorage.getItem("username") || "";
lnameField.value = localStorage.getItem("lastname") || "";
ageField.value = localStorage.getItem("age") || "";

submit.addEventListener("click", () => {
    var firstname = fnameField.value
    var lastname = lnameField.value
    var age = ageField.value
    localStorage.setItem("username", firstname)
    localStorage.setItem("lastname", lastname)
    localStorage.setItem("age", age)
})
let sfnameField = document.getElementById("sfname")
let slnameField = document.getElementById("sLname")
let sageField = document.getElementById("sage")
let ssubmit = document.getElementById("ssubmit-btn")

sfnameField.value = sessionStorage.getItem("susername") || "";
slnameField.value = sessionStorage.getItem("slastname") || "";
sageField.value = sessionStorage.getItem("sage") || "";

ssubmit.addEventListener("click", () => {
    var sfirstname = sfnameField.value
    var slastname = slnameField.value
    var sage = sageField.value
    sessionStorage.setItem("susername", sfirstname)
    sessionStorage.setItem("slastname", slastname)
    sessionStorage.setItem("sage", sage)
})

