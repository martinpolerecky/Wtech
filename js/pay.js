let cardn = document.getElementById("card_number");
let cardd = document.getElementById("expiry_date");
let cvv = document.getElementById("cvv");

function validateCardNumber() {
    let cardNumberWithoutSpaces = cardn.value.replace(/\s/g, '');
    if (cardNumberWithoutSpaces.length !== 16) {
        cardn.style.backgroundColor = 'red';
    } else {
        cardn.style.backgroundColor = 'white';
    }
}

function validateExpiryDate() {
    if (cardd.value.length !== 5) {
        cardd.style.backgroundColor = 'red';
    } else {
        cardd.style.backgroundColor = 'white';
    }
}

function validateCVV() {
    if (cvv.value.length !== 3) {
        cvv.style.backgroundColor = 'red';
    } else {
        cvv.style.backgroundColor = 'white';
    }
}

cardn.addEventListener('input', validateCardNumber);
cardd.addEventListener('input', validateExpiryDate);
cvv.addEventListener('input', validateCVV);
