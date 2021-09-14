const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkNumber = document.querySelector("#check-number")


checkNumber.addEventListener('click',function getValue(){
    console.log(dateOfBirth.value)
    console.log(luckyNumber.value)
})