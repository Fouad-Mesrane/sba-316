// select elements
const form = document.getElementById("form");
const errorEl = document.querySelector("#error");
const errorMessage = document.createElement("span");
// get inputs
const mortgageAmountEl = document.getElementById("mortgage-amount");
const termEl = document.querySelector("#mortgage-term");
const rateEl = document.querySelector("#mortgage-rate");
const repaymentRadio = document.getElementById("repayment");
const interestRadio = document.getElementById("interest");

let mortgageAmount = 0;
let term = 0;
let rate = 0;
// mortgageAmountEl.addEventListener("input", (e) => {
//   if (e.target.textContent !== "") {
//     errorEl.classList.add("d-none");
//   }
// });

function validation() {
  // validating the amount input
  mortgageAmount = Number(mortgageAmountEl.value);
  term = Number(termEl.value);
  rate = Number(rateEl.value);

  if (isNaN(mortgageAmount) || mortgageAmount <= 0) {
    errorEl.appendChild(errorMessage);
    errorMessage.textContent = `Please enter a valid number and cannot be 0 or less`;
    errorEl.classList.remove("d-none");
    mortgageAmountEl.classList.add("red-border");
  } else {
    errorMessage.textContent = ``;
    errorEl.classList.add("d-none");
    mortgageAmountEl.classList.remove("red-border");
    mortgageAmountEl.classList.add("green-border");
  }

  // validating the term input

  if (isNaN(term) || term <= 0) {
    errorEl.appendChild(errorMessage);
    errorMessage.textContent = `Please enter a valid number and cannot be 0 or less`;
    errorEl.classList.remove("d-none");
    termEl.classList.add("red-border");
  } else {
    errorMessage.textContent = ``;
    errorEl.classList.add("d-none");
    termEl.classList.remove("red-border");
    termEl.classList.add("green-border");
  }
  // validating the rate input

  if (isNaN(rate) || rate <= 0) {
    errorEl.appendChild(errorMessage);
    errorMessage.textContent = `Please enter a valid number and cannot be 0 or less`;
    errorEl.classList.remove("d-none");
    rateEl.classList.add("red-border");
  } else {
    errorMessage.textContent = ``;
    errorEl.classList.add("d-none");
    rateEl.classList.remove("red-border");
    rateEl.classList.add("green-border");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();

  console.log(mortgageAmount);
});



function calculateRepayments (amount, term, rate) {

}

