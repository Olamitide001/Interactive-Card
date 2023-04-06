"use strict";
const nameInput = document.getElementById("name");
const nameField = document.querySelector(".holdersname");
const cardNumber = document.getElementById("number");
const cardNumberfield = document.querySelector(".cardnumber");
const expiryMonthField = document.querySelector(".expirydatemonth");
const expiryYearField = document.querySelector(".expirydateyear");
const expiryMonth = document.getElementById("month");
const expiryYear = document.getElementById("year");
const cvcNumber = document.getElementById("cvc");
const cvcField = document.querySelector(".cvv-number");
const dateError = document.querySelector(".date-error");
const cvcError = document.querySelector(".cvc-error");
const cardNumberError = document.querySelector(".number-error");
const formDisplay = document.querySelector(".details");
const continuePage = document.querySelector(".final-page");
const confirmBtn = document.querySelector(".submit");
const allinputElement = document.querySelectorAll("input");
const continueBtn = document.querySelector('.continue')

dateError.style.opacity = 0;
cvcError.style.opacity = 0;
cardNumberError.style.opacity = 0;
formDisplay.style.display = "block";
continuePage.style.display = "none";
let counter = 0;

//check the value of the card on the input field
nameInput.oninput = showValue;
function showValue() {
  nameField.textContent = nameInput.value;
}
cardNumber.oninput = numberValue;
function numberValue() {
  cardNumberfield.textContent = cardNumber.value;
}
expiryMonth.oninput = month;
function month() {
  expiryMonthField.textContent = expiryMonth.value;
}
expiryYear.oninput = year;
function year() {
  expiryYearField.textContent = expiryYear.value;
}
cvcNumber.oninput = cvvNumber;
function cvvNumber() {
  cvcField.textContent = cvcNumber.value;
}

//Implementing Card Name
const updateUI = function () {
  holderName(nameInput.value);
  numberfield(cardNumber.value);
  monthField(Number(expiryMonth.value));
  yearField(expiryYear.value);
  cvcNumfield();
};

function holderName(str) {
  if (nameInput.value !== "") {
    nameInput.style.border = "0.5px solid black";
    nameField.textContent = "";
    nameField.style.color = "white";
    str = str
      .toLowerCase()
      .split(" ")
      .map((curr) => {
        return curr[0].toUpperCase() + curr.slice(1);
      })
      .join(" ");
    str.split(" ").map((curr, index) => {
      if (index > 0) {
        nameInput.style.border = "0.5px solid black";
        nameField.textContent = str;
      } else {
        nameInput.style.border = "2px solid red";
        nameField.textContent = "";
      }
    });
  } else {
    nameInput.style.border = "2px solid red";
    nameField.textContent = "Input Your Name";
    nameField.style.color = "red";
  }
}
//Implementing card number
function numberfield(num) {
  if (cardNumber.value !== "") {
    cardNumber.style.border = "0.5px solid black";
    cardNumberError.style.opacity = 0;
    num = num.replaceAll(" ", "");
    num.split("").map((curr, index) => {
      if (curr > 0 && num.length == 16) {
        cardNumberfield.textContent =
          num.slice(0, 4) +
          " " +
          num.slice(4, 8) +
          " " +
          num.slice(8, 12) +
          " " +
          num.slice(12, 16);
        cardNumber.style.border = "0.5px solid black";
        cardNumberError.style.opacity = 0;
      } else {
        cardNumberfield.textContent = "";
        cardNumberError.style.opacity = 1;
        cardNumber.style.border = "2px solid red";
      }
    });
  } else {
    cardNumber.style.border = "2px solid red";
    cardNumberError.style.opacity = 1;
  }
}
//Implementing Expiry Date
function monthField(month) {
  if (expiryMonth.value !== "") {
    const monthValid = expiryMonth.value.split("").map((curr) => {
      if (curr >= 0 && month <= 12) {
        expiryMonthField.textContent = month;
        expiryMonth.style.border = "0.5px solid black";
        dateError.style.opacity = 0;
      } else {
        expiryMonthField.textContent = "00";
        dateError.style.opacity = 1;
        expiryMonth.style.border = "2px solid red";
        dateError.textContent = "invalid expiry date";
      }
    });
  } else {
    dateError.style.opacity = 1;
  }
}

function yearField(year) {
  const yearValid = expiryYear.value.split("").map((curr) => {
    if (curr >= 0 && (year = 23) && year <= 26) {
      expiryYearField.textContent = expiryYear.value;
      expiryYear.style.border = "0.5px solid black";
      dateError.style.opacity = 0;
    } else {
      expiryYearField.textContent = "00";
      expiryYear.style.border = "2px solid red";
      dateError.style.opacity = 1;
      dateError.textContent = "invalid expiry date";
    }
  });
}

//Implementinf cvv number
function cvcNumfield() {
  if (cvcNumber.value !== "") {
    cvcNumber.style.border = "0.5px solid black";
    cvcError.style.opacity = 0;
    cvcNumber.value.split("").map((curr) => {
      if (curr >= 0 && cvcNumber.value.length == 3) {
        cvcField.textContent = cvcNumber.value;
        cvcNumber.style.border = "0.5px solid black";
        cvcError.style.opacity = 0;
      } else {
        cvcField.textContent = "00";
        cvcError.style.opacity = 1;
        cvcNumber.style.border = "2px solid red";
        cvcError.textContent = "invalid CVC Number";
      }
    });
  } else {
    cvcError.style.opacity = 1;
  }
}

confirmBtn.addEventListener("click", function (event) {
  event.preventDefault();
  updateUI()
allinputElement.forEach((input,index) =>{
    
  if (input.value !=="")  {
    counter++ 
    if(counter < 10){
    updateUI();
  } else {
    formDisplay.style.display = "none";
    continuePage.style.display = "block";
  }
}
})
});

continueBtn.addEventListener('click', function(){
  formDisplay.style.display = "block";
  continuePage.style.display = "none";
  nameInput.value =""
  cardNumber.value =""
  expiryMonth.value =""
  expiryYear.value = ""
  cvcNumber.value=""
  nameField.textContent ="FELICIA LEIRE"
  cardNumberfield.textContent ="0000 0000 0000 0000"
  expiryMonth.textContent="09"
  expiryYear.textContent="00"
  cvcField.textContent="123"
})
