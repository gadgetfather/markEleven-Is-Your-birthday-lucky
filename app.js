const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkNumber = document.querySelector("#check-number")
const outputBox = document.querySelector("#output-box")


function checkBirthDateIsLucky(){
 const dob = dateOfBirth.value
 const sum = calculateSum(dob)
 if(sum&&dob){
 checkLuck(sum,luckyNumber.value)}
 else{
     outputBox.textContent = "Enter both values !!!"

 }
}


function checkLuck(sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.textContent="YOUR BIRTHDAY IS LUCKY!"

    }
    else{
        outputBox.textContent="YOUR BIRTHDAY IS NOT LUCKY"

    }
    
}


function calculateSum(dob){
    dob = dob.replaceAll("-","")
    let sum = 0;
    for(let i = 0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i))

    }
    return sum;

}



checkNumber.addEventListener('click',checkBirthDateIsLucky)
