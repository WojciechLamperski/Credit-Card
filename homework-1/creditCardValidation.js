const form = document.querySelector("form");

const cardHolderName = document.getElementById("cardHolderName");
const cardNumber = document.getElementById("cardNumber");
const expiryMonth = document.getElementById("expiryMonth");
const expiryYear = document.getElementById("expiryYear");
const cvc = document.getElementById("cvc");
const button = document.querySelector("button");

const backCvc = document.querySelector(".number p")
const frontName = document.querySelector(".month-year p:first-child");
const frontNumber = document.querySelector(".card-front > span");
const frontMonth = document.querySelector(".month-year p:last-child span:first-child");
const frontYear = document.querySelector(".month-year p:last-child span:last-child");

const errorName = document.querySelector("#errorName");
const errorNumber = document.querySelector("#errorNumber");
const errorMonthYear = document.querySelector("#errorMonthYear");
const errorCVC = document.querySelector("#errorCVC");

// Functions for events


function inputCardholder(){

    /* Checks weather that is not a number :) */
    if (isNaN(cardHolderName.value) === true){
        errorName.innerText = "";
        frontName.innerText = `${cardHolderName.value}`;
    }else{
        errorName.innerText = "Letters only!";
    }

}

function inputCardNumber(){

    /* Checks weather this is a number :) */
    if (isNaN(cardNumber.value) === false){
        errorNumber.innerText = "";
        frontNumber.innerText = `${cardNumber.value}`;
    }else{
        errorNumber.innerText = "Numbers only!";
    }

}

function inputExpMonth(){
    
    if(expiryMonth.value.length < 2){
        if(expiryMonth.value == ""){
            errorMonthYear.innerText = "";
        }else{
            errorMonthYear.innerText = "Must be more than 2 letters";
        }
    }else{
        if (isNaN(expiryMonth.value) === false){
            if(expiryMonth.value == " " || expiryMonth.value == "  "){
                errorMonthYear.innerText = "Can't be blank";
                expiryMonth.value = "";
                frontMonth.innerText = "00";
            }else{
                errorMonthYear.innerText = "";
                frontMonth.innerText = `${expiryMonth.value}`;
            }
        }else{
            errorMonthYear.innerText = "Numbers only!";
        }
    }

}

function inputExpYear(){

    if(expiryYear.value.length < 2){
        if(expiryYear.value == ""){
            errorMonthYear.innerText = "";
        }else{
            errorMonthYear.innerText = "Must be more than 2 letters";
        }
    }else{
        if (isNaN(expiryYear.value) === false){
            if(expiryYear.value == " " || expiryYear.value == "  "){
                errorMonthYear.innerText = "Can't be blank";
                expiryYear.value = "";
                frontYear.innerText = "00";
            }else{
                errorMonthYear.innerText = "";
                frontYear.innerText = `${expiryYear.value}`;
            }
        }else{
            errorMonthYear.innerText = "Numbers only!";
        }
    }

}

function inputCvc(){

    if(cvc.value.length < 3){
        if(cvc.value == ""){
            errorCVC.innerText = "";
        }else{
            errorCVC.innerText = "Must be more than 3 letters";
        }
    }else{
        if (isNaN(cvc.value) === false){
            if(cvc.value == " " || cvc.value == "  " || cvc.value == "   "){
                errorCVC.innerText = "Can't be blank";
                cvc.value = "";
                backCvc.innerText = "123";
            }else{
                errorCVC.innerText = "";
                backCvc.innerText = `${cvc.value}`;
            }
        }else{
            errorCVC.innerText = "Numbers only!";
        }
    }
    
}

function submit(){

}

//Events

cardHolderName.addEventListener('change', inputCardholder);
cardNumber.addEventListener('change', inputCardNumber);
expiryMonth.addEventListener('change', inputExpMonth);
expiryYear.addEventListener('change', inputExpYear);
cvc.addEventListener('change', inputCvc);
