"use strict";

// Element Selectors 
const signUpCardEl =document.querySelector(".sign-up-card");
const sucessCardEl =document.querySelector(".success-card"); 
const signUpFormEl =document.querySelector(".sign-up-form");
const emailIn = document.getElementById("email");
const submitBtn = document.querySelector(".btn-submit");
const dismissBtn = document.querySelector(".btn-dismiss");
const submittedEmailEl = document.querySelector(".submitted-email");

// Event-Listeners

submitBtn.addEventListener('click', submitEmail);
dismissBtn.addEventListener('click', toggleCards); 

// Functions 
// Toggle Function
function toggleCards(){
    signUpCardEl.classList.toggle('hidden');
    sucessCardEl.classList.toggle('hidden');
}

// Email Validation 
function validateEmail(email){
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

}

// Email Submit 

function submitEmail(e){
    e.preventDefault();

    // Email Validation 
    if(validateEmail(emailIn.value)){
        submittedEmailEl.innerText=emailIn.value;
        toggleCards();
        emailIn.value ="";
        signUpFormEl.classList.remove("error"); 
    }
    // invalid email
    else{
        signUpFormEl.classList.add("error");
    }
}