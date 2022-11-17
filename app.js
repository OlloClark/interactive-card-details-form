const cardNumber = document.getElementById("card_number");
const numberInput = document.getElementById("card_number_input");

const cardName = document.getElementById("name");
const nameInput = document.getElementById("card_name");

const cardMonth = document.getElementById("month");
const monthInput = document.getElementById("card_month");

const cardYear = document.getElementById("year");
const yearInput = document.getElementById("card_year");

const cardCvc = document.getElementById("cvc");
const cvcInput = document.getElementById("card_cvc");

const submitBtn = document.getElementById("submit_btn");
const continueBtn = document.getElementById("continue_btn")

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
			nameInput.parentElement.classList.add("error_message")
		} else {
			nameInput.classList.remove("error");
			nameInput.parentElement.classList.remove("error_message")
		}
		if (!numberInput.value) {
			numberInput.classList.add("error");
			numberInput.parentElement.classList.add("error_message")
		} else {
			numberInput.classList.remove("error");
			numberInput.parentElement.classList.remove("error_message")
		}
		if (!yearInput.value) {
			yearInput.classList.add("error");
			yearInput.parentElement.classList.add("error_message")
		} else {
			yearInput.classList.remove("error");
			yearInput.parentElement.classList.remove("error_message")
		}
		if (!monthInput.value) {
			monthInput.classList.add("error");
			monthInput.parentElement.classList.add("error_message")
		} else {
			monthInput.classList.remove("error");
			monthInput.parentElement.classList.remove("error_message")
		}
		if (!cvcInput.value) {
			cvcInput.classList.add("error");
			cvcInput.parentElement.classList.add("error_message")
		} else {
			cvcInput.classList.remove("error");
			cvcInput.parentElement.classList.remove("error_message")
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