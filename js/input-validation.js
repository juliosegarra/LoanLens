const inputLoanAmount = document.getElementById("amount");
const inputInterestRate = document.getElementById("interest");
const inputLoanTenure = document.getElementById("tenure");

inputLoanAmount.addEventListener("input", () => {
    value = inputLoanAmount.value;
    inputLoanAmount.value = value.replace(/[^0-9]/gi, "");
});

inputInterestRate.addEventListener("input", () => {
    value = inputInterestRate.value;
    inputInterestRate.value = value.replace(/[^0-9.]/gi, "");
});

inputLoanTenure.addEventListener("input", () => {
    value = inputLoanTenure.value;
    inputLoanTenure.value = value.replace(/[^0-9]/gi, "");
});
