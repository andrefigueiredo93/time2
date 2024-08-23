// Get today's date
var today = new Date();

// Get the date for March 1, 2024
var finalDate = new Date(2025, 2, 1); // Note: JavaScript counts months from 0 (January) to 11 (December)
var tempDate = new Date(2024, 9, 20); // Note: JavaScript counts months from 0 (January) to 11 (December)

// Calculate the difference in milliseconds
var diff_final = calculeDays(today, finalDate);
var diff_temp = calculeDays(today, tempDate);

// Get the element with id "timer"
var daysElement = document.getElementById('timer');

setElementText('timer', 'Faltam ' + diff_final + " dias para eu voltar");
setElementText('timer2', 'Faltam ' + diff_temp + " para te ir ai dar um kissssss");

function calculeDays(today, futureDate) {
    return Math.ceil((futureDate - today) / (1000 * 60 * 60 * 24));
}

function setElementText(id, text) {
    var element = document.getElementById(id);
    element.innerText = text;
}
