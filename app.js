const cardNumber = document.getElementById("cardNumber");
const numberInput = document.getElementById("cardNumberInput");

const cardName = document.getElementById("name");
const nameInput = document.getElementById("cardName");

const cardMonth = document.getElementById("month");
const monthInput = document.getElementById("cardMonth");

const cardYear = document.getElementById("year");
const yearInput = document.getElementById("cardYear");

const cardCvc = document.getElementById("cvc");
const cvcInput = document.getElementById("cardCvc");

const submitBtn = document.getElementById("submitBtn");
const continueBtn = document.getElementById("continueBtn")

const completed = document.querySelector(".thank")
const form = document.querySelector("form");

function setCardNumber(e) {
	cardNumber.innerText = format(e.target.value);
}

function setCardName(e) {
	cardName.innerText = e.target.value;
}

function setCardMonth(e) {
	cardMonth.innerText = e.target.value;
}

function setCardYear(e) {
	cardYear.innerText = e.target.value;
}

function setCardCvc(e) {
	cardCvc.innerText = e.target.value;
}

function format(s) {
	return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

function handleSubmit(e) {
	e.preventDefault();
		if (!nameInput.value) {
			nameInput.classList.add("error");
			nameInput.parentElement.classList.add("errorMessage")
		} else {
			nameInput.classList.remove("error");
			nameInput.parentElement.classList.remove("errorMessage")
		}
		if (!numberInput.value) {
			numberInput.classList.add("error");
			numberInput.parentElement.classList.add("errorMessage")
		} else {
			numberInput.classList.remove("error");
			numberInput.parentElement.classList.remove("errorMessage")
		}
		if (!yearInput.value) {
			yearInput.classList.add("error");
			yearInput.parentElement.classList.add("errorMessage")
		} else {
			yearInput.classList.remove("error");
			yearInput.parentElement.classList.remove("errorMessage")
		}
		if (!monthInput.value) {
			monthInput.classList.add("error");
			monthInput.parentElement.classList.add("errorMessage")
		} else {
			monthInput.classList.remove("error");
			monthInput.parentElement.classList.remove("errorMessage")
		}
		if (!cvcInput.value) {
			cvcInput.classList.add("error");
			cvcInput.parentElement.classList.add("errorMessage")
		} else {
			cvcInput.classList.remove("error");
			cvcInput.parentElement.classList.remove("errorMessage")
		}
		if (nameInput.value && numberInput.value && monthInput.value && yearInput.value && cvcInput.value) {
			completed.classList.remove("hidden");
			form.classList.add("hidden");
		}
	}

	function handleContinue() {
		form.classList.remove("hidden");
		completed.classList.add("hidden");
		numberInput.value = "";
		nameInput.value = "";
		monthInput.value = "";
		yearInput.value = "";
		cvcInput.value = "";
	}

numberInput.addEventListener("keyup", setCardNumber);
nameInput.addEventListener("keyup", setCardName);
monthInput.addEventListener("keyup", setCardMonth);
yearInput.addEventListener("keyup", setCardYear);
cvcInput.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);
continueBtn.addEventListener("click", handleContinue);