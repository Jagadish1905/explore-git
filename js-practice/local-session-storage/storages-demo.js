let fname = document.getElementById("fname")
let lname = document.getElementById("Lname")
let lage = document.getElementById("age")
let submit = document.getElementById("submit-btn")



fname.value = sessionStorage.getItem('firstname')
lname.value = sessionStorage.getItem('lastname')
lage.value = sessionStorage.getItem('age')

const handleSubmit = () => {
    let firstname = fname.value
    console.log(firstname)
    sessionStorage.setItem('firstname', firstname)
    let lastname = lname.value
    sessionStorage.setItem("lastname", lastname)
    let age = lage.value
    sessionStorage.setItem("age", age)
    setTimeout(() => {
        sessionStorage.removeItem('firstname')
    }, 2000)
}


submit.addEventListener("click", handleSubmit)

