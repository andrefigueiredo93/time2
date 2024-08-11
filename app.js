// Get today's date
let today = new Date();

// Get the date for March 1, 2024
let futureDate = new Date(2024, 2, 1); // Note: JavaScript counts months from 0 (January) to 11 (December)

// Calculate the difference in milliseconds
let diff = futureDate - today;

// Convert milliseconds to days
let days = Math.ceil(diff / (1000 * 60 * 60 * 24));

// Get the element with id "timer"
let daysElement = document.getElementById('timer');

// Set the text of the "timer" element to the number of days
daysElement.innerText = 'Faltam ' + (days * -1) + " dias para eu voltar";
