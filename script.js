const stateModule = (() => {
	let card = {
		 cardName: '',
		 cardNumber: '',
		 expDate: {
			  month: '',
			  year: '',
		 },
		 cvc: '',
	};

	const getCard = () => card;

	const setCardName = (cardName) => {
		 card.cardName = cardName;
	};

	const setCardNumber = (cardNumber) => {
		 card.cardNumber = cardNumber;
	};

	const setExpMonth = (expMonth) => {
		 card.expDate.month = expMonth;
	};

	const setExpYear = (expYear) => {
		 card.expDate.year = expYear;
	};

	const setCVC = (cvc) => {
		 card.cvc = cvc;
	};

	const resetForm = () => {
		 card = {
			  cardName: 'JANE APPLESEED',
			  cardNumber: '0000 0000 0000 0000',
			  expDate: {
					month: '00',
					year: '00',
			  },
			  cvc: '000',
		 };
	};

	return {
		 getCard,
		 setCardName,
		 setCardNumber,
		 setExpMonth,
		 setExpYear,
		 setCVC,
		 resetForm,
	};
})();

const updatePage = () =>{

    const crdNameInput = document.getElementById("CNinput")
    const cardNumberInput = document.getElementById("CNoInput")
    const expMonthInput= document.getElementById("mm-input")
    const expYearInput= document.getElementById("yy-input")
	 const cvcInput = document.getElementById("cvc");

	crdNameInput.addEventListener("blur", function () {
		const nameError = document.querySelector(".name_error");
		const nameInputError = document.querySelector("#CNinput");
		if (isValidCardName(crdNameInput.value)) {
			stateModule.setCardName(crdNameInput.value);
			updateNameOnCard();
			nameError.style.display = "none";
			nameInputError.style.border = "2px solid hsl(270, 3%, 87%)"; 
		} else {
			stateModule.setCardName('');
			nameError.style.display = "block";
			nameInputError.style.border = "2px solid red"; 
		}
	});
	
	cardNumberInput.addEventListener("blur", function () {
		const numberError = document.querySelector(".card_no_error");
		const numberInputError = document.querySelector("#CNoInput");
		if (isValidCardNumber(cardNumberInput.value)) {
			stateModule.setCardNumber(cardNumberInput.value);
			updateNumberOnCard();
			numberError.style.display = "none";
			numberInputError.style.border = "2px solid hsl(270, 3%, 87%)";
		} else {
			stateModule.setCardNumber('')
			numberError.style.display = "block";
			numberInputError.style.border = "2px solid red"; 
		}
	});
	
	expMonthInput.addEventListener("blur", function () {
		const expDateError = document.querySelector(".date_error");
		const mmInputError = document.querySelector("#mm-input");
		if (isValidExpMonth(expMonthInput.value)) {
			stateModule.setExpMonth(expMonthInput.value);
			expDateError.style.display = "none";
			mmInputError.style.border = "2px solid hsl(270, 3%, 87%)";
		} else {
			stateModule.setExpMonth('')
			expDateError.style.display = "block";
			mmInputError.style.border = "2px solid red"; 
		}
	});

	expYearInput.addEventListener("blur", function () {
		const expDateError = document.querySelector(".date_error");
		const yyInputError = document.querySelector("#yy-input");
		if (isValidExpYear(expYearInput.value)) {
			stateModule.setExpYear(expYearInput.value);
			if(isValidExpMonth){
				updateExpMounthOnCard();
			}
			expDateError.style.display = "none";
			yyInputError.style.border = "2px solid hsl(270, 3%, 87%)";
		} else {
			stateModule.setExpYear('')
			expDateError.style.display = "block";
			yyInputError.style.border = "2px solid red"; 
		}
	});

	cvcInput.addEventListener("blur", function () {
		const cvcError = document.querySelector(".cvc_error");
		const cvcInputError = document.querySelector("#cvc");
		if (isValidCVC(cvcInput.value)) {
			stateModule.setCVC(cvcInput.value);
			updateCVCOnCard()
			cvcError.style.display = "none";
			cvcInputError.style.border = "2px solid hsl(270, 3%, 87%)";
		} else {
			stateModule.setCVC('')
			cvcError.style.display = "block";
			cvcInputError.style.border = "2px solid red"; 
		}
	});

	const confirmButton = document.getElementById("confirm");
    confirmButton.addEventListener("click", function () {
		  if(stateModule.getCard().cardName&&stateModule.getCard().cardNumber&&stateModule.getCard().expDate.month&&stateModule.getCard().expDate.year&&stateModule.getCard().cvc){
			const formContainer = document.querySelector(".form-container");
			formContainer.style.display = "none";
			const successContainer = document.querySelector(".success-container")
			successContainer.style.display = "flex";
		  }
        
    });
	const continueButton = document.getElementById("continue");
	continueButton.addEventListener("click", function () {
        const formContainer = document.querySelector(".form-container");
        formContainer.style.display = "block";
		  const successContainer = document.querySelector(".success-container")
		  successContainer.style.display = "none";
		  resetForm()
		  document.activeElement.blur();
		  const card = stateModule.getCard();
		  console.log('card:', card);
    });
}

updatePage()

const updateNameOnCard = () => {
	const card = stateModule.getCard();
	const nameOnCard = document.getElementById("card-name");
	nameOnCard.innerText = card.cardName.toUpperCase();
};

const updateNumberOnCard = () => {
	const card = stateModule.getCard();
	const numberOnCard = document.getElementById("card-no");
	const formattedNumber = card.cardNumber.replace(/(\d{4})/g, '$1 ');
	numberOnCard.innerText = formattedNumber;
};

const updateExpMounthOnCard = () => {
	const card = stateModule.getCard();
	const expDateOnCard = document.getElementById("card-exp");
	expDateOnCard.innerText = `${card.expDate.month}/${card.expDate.year}`;
}

const updateCVCOnCard = () => {
	const card = stateModule.getCard();
	const cvcOnCard = document.getElementById("card-cvc");
	cvcOnCard.innerText = card.cvc;
};

const resetForm = () => {
	stateModule.resetForm()
	updateNameOnCard()
	updateNumberOnCard()
	updateExpMounthOnCard()
	updateCVCOnCard()
	
	const crdNameInput = document.getElementById("CNinput");
	const cardNumberInput = document.getElementById("CNoInput");
	const expMonthInput = document.getElementById("mm-input");
	const expYearInput = document.getElementById("yy-input");
	const cvcInput = document.getElementById("cvc");

	crdNameInput.value = "";
	cardNumberInput.value = "";
	expMonthInput.value = "";
	expYearInput.value = "";
	cvcInput.value = "";
}

const isValidCardNumber = (number) => {
	return /^\d{16}$/.test(number);
};

const isValidCardName = (name) => {
	const trimmedName = name.trim();
	const words = trimmedName.split(/\s+/);
	return words.length >= 2 && words.every(word => /^[a-zA-Z]+$/.test(word));
};

const isValidExpMonth = (expMonth) => {
	const numericMonth = Number(expMonth);
	return !isNaN(numericMonth) && numericMonth >= 1 && numericMonth <= 12;
};

const isValidExpYear = (expYear) => {
	const currentYear = new Date().getFullYear() % 100; 
   const enteredYear = Number(expYear);
   return /^\d{2}$/.test(expYear) && enteredYear >= currentYear;
};

const isValidCVC = (cvc) => {
	console.log('cvc', cvc);
	return /^\d{3}$/.test(cvc);
};