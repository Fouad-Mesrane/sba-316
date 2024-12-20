// select elements
const form = document.getElementById("form");
//
const resultsContainer = document.getElementById("results-container");

// clear all button
const cleaAll = document.getElementById("clear-btn");

// error message
const errorEl = document.querySelector("#error");
const errorMessage = document.createElement("span");
// get inputs
const mortgageAmountEl = document.getElementById("mortgage-amount");
const termEl = document.querySelector("#mortgage-term");
const rateEl = document.querySelector("#mortgage-rate");
const repaymentRadio = document.getElementById("repayment");
const interestRadio = document.getElementById("interest");

// repayments monthly amount
const repaymentAmountEl = document.getElementById("repayment-amount");
const totalRepaymentAmountEl = document.getElementById("total-rep-amount");

let mortgageAmount = 0;
let term = 0;
let rate = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validation() && repaymentRadio.checked) {
    // calling the helper function to calculate the monthly repayments
    const monthlyRepayment = calculateRepayments(mortgageAmount, term, rate);
    const totalPayments = term * 12;
    resultsContainer.firstElementChild.classList.add("d-none");
    resultsContainer.lastElementChild.classList.remove("d-none");
    repaymentAmountEl.textContent = monthlyRepayment;
    totalRepaymentAmountEl.textContent = (
      monthlyRepayment * totalPayments
    ).toFixed(2);
  } else if (validation() && interestRadio.checked) {
  }
});

// validation function

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
    return false;
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
    return false;
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
    return false;
  } else {
    errorMessage.textContent = ``;
    errorEl.classList.add("d-none");
    rateEl.classList.remove("red-border");
    rateEl.classList.add("green-border");
  }
  return true;
}

// helper function
// repayments calculation function
function calculateRepayments(amount, term, rate) {
  //  monthly rate based on yearly
  const monthlyRate = rate / 100 / 12;

  // calculate totale payments based on the years

  const totalPayments = term * 12;

  //

  const monthlyPayment =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);
  return monthlyPayment.toFixed(2);
}

// function to calculate interests

function calculateInterests(amount, term, interest) {
  //  monthly rate based on yearly
  const monthlyRate = rate / 100 / 12;

  const interestPayment = amount * monthlyRate;

  return interestPayment.toFixed(2);
}

// clear all button function

cleaAll.addEventListener("click", (e) => {
  mortgageAmountEl.value = "";
  termEl.value = "";
  rateEl.value = "";

  if (!repaymentRadio.checked) {
    repaymentRadio.checked = true;
  }

  if (!errorEl.classList.contains("d-none")) {
    errorMessage.textContent = ``;
    errorEl.classList.add("d-none");
  }

  if (resultsContainer.firstElementChild.classList.contains("d-none")) {
    resultsContainer.firstElementChild.classList.remove("d-none");
    resultsContainer.lastElementChild.classList.add("d-none");
  }

  termEl.classList.remove("red-border");
  termEl.classList.remove("green-border");
  mortgageAmountEl.classList.remove("red-border");
  mortgageAmountEl.classList.remove("green-border");
  rateEl.classList.remove("red-border");
  rateEl.classList.remove("green-border");
});
