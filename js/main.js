"use strict";
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: Tove Hansson
 */

// Hämta element från DOM
const form = document.querySelector("#studentform");
const clearButton = document.querySelector("#clear");

const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const fontSelect = document.querySelector("#font");

const previewFullname = document.querySelector("#previewfullname");
const previewEmail = document.querySelector("#previewemail");
const previewPhone = document.querySelector("#previewphone");

const errorList = document.querySelector("#errorlist");
const historySection = document.querySelector("#history");
const deleteHistoryButton = document.querySelector("#delete");

// Array som används för felmeddelanden
let errors = [];


// Array som innehåller sparade studentkort
let history = [];

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */

// Kontrollera formulärets obligatoriska fält
function validateForm(fullname, email, phone) {
    errors = [];

    // Kontrollera att ett fullständigt namn är ifyllt
    let validate = true;

    if (fullname === "") {
        errors.push("Du måste ange ett fullständigt namn.");
        validate = false;
    }

    // Kontrollera att e-postadressen är ifylld
    if (email.length === 0) {
        errors.push("Du måste ange en e-postadress.");
        validate = false;
    }

    // Kontrollera att e-postadressen innehåller @
    if (!email.includes("@")) {
        errors.push("E-postadressen måste innehålla @.");
        validate = false;
    }

    // Kontrollera att telefonnumret är ifyllt
    if (phone.length === 0) {
        errors.push("Du måste ange ett telefonnummer.");
        validate = false;
    }

    // Visa eventuella felmeddelanden
    displayErrors();

    // Returnera resultatet (true eller false) av valideringen
    return validate;

}


/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors() {
    // Rensa tidigare felmeddelanden
    errorList.innerHTML = "";

    // Skriv ut aktuella felmeddelanden till DOM
    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            const li = document.createElement("li");
            li.textContent = errors[i];

            errorList.appendChild(li);
        }
    }
}
/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard() {

    // Hämta information från formuläret
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const font = fontSelect.value;

    // Uppdatera studentkortet
    previewFullname.textContent = fullname;
    previewEmail.textContent = email;
    previewPhone.textContent = phone;

    // Ändra typsnittet på studentkortet
    previewFullname.style.fontFamily = font;
    previewEmail.style.fontFamily = font;
    previewPhone.style.fontFamily = font;

    // Lägg till studentkortet i historiken

    // Spara och uppdatera historiken
}


/**
 * Sparar historiken i localStorage.
 */
function saveHistory() {
    // Spara history i localStorage
}


/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
    // Hämta eventuell sparad historik

    // Uppdatera history
}


/**
 * Visar historiken på sidan.
 */
function renderHistory() {
    // Rensa tidigare visad historik

    // Skriv ut innehållet i history till DOM
}


/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {
    // Återställ formulär och studentkort

    // Rensa eventuella felmeddelanden
}


/**
 * Raderar hela historiken.
 */
function deleteHistory() {
    // Radera sparad historik

    // Uppdatera history och visningen på sidan
}


// Eventlyssnare

// När formuläret skickas:
// - validera inmatningen
// - skapa studentkort om valideringen lyckas

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    // Läs in värden från formuläret
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    // Validera formuläret
    const validate = validateForm(fullname, email, phone);

    // Kontrollera om fomuläret är korrekt ifyllt, annars inte (false).
    if (validate === false) {
        return;
    }

    // Skapa studentkortet
    createStudentCard();

}

// När användaren klickar på "Rensa"


// När användaren klickar på "Radera historik"


// När sidan laddas:
// - läs in och visa eventuell tidigare historik