function validateCard() {
	var a = document.getElementById("textCard")
	if (a)
	 a = a.value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
	// Regular expression inspiré de https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
    var filter = /([0-9]{4}[ ]{1}[0-9]{4}[ ]{1}[0-9]{4}[ ]{1}[0-9]{4})/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateAge() {
	var a = document.getElementById("age").value;

    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
	// Regular expression inspiré de https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
    var filter = /([0-9]{1,3})/;
    if (filter.test(a) == true) {
        return true;
    }
    else {
        return false;
    }
}

export function validate() {
	//validate
	if (!validateCard()) {
		alert("Numero de carte de credit invalide");
	}
	else if (!validateAge()) {
		alert("age invalide");
	}
	else {
		alert("Inscription a été un succés");
	}
}

export function validateEn() {
	//validate
	if (!validateCard()) {
		alert("Invalid credit card number");
	}
	else if (!validateAge()) {
		alert("Invalid Age");
	}
	else {
		alert("Successfully booked");
	}
}



