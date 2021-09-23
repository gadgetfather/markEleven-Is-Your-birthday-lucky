const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkNumber = document.querySelector("#check-number")
const outputBox = document.querySelector("#output-box")

checkNumber.addEventListener("click",checkBirthDateIsLucky)


luckyNumber.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}

function checkBirthDateIsLucky(){
 const dob = dateOfBirth.value
 console.log(dob)
 const sum = calculateSum(dob)
 if(sum&&dob){
 checkLuck(sum,luckyNumber.value)}
 else{
     outputBox.textContent = "Enter both values !!!"

 }
}


function checkLuck(sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.textContent="Your birthday is lucky (｡◕‿◕｡)"

    }
    else{
        outputBox.textContent="Your birthday is not lucky ಥ﹏ಥ"

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



