'use strict';

Date.prototype.getMonthString = function() {
    switch(this.getMonth()) {
        case 0: return "January";
        case 1: return "February";
        case 2: return "March";
        case 3: return "April";
        case 4: return "May";
        case 5: return "June";
        case 6: return "July";
        case 7: return "August";
        case 8: return "September";
        case 9: return "October";
        case 10: return "November";
        case 11: return "December";
    }
}

Date.prototype.getDayString = function() {
    switch(this.getDay()) {
        case 0: return `Sunday\xa0`;
        case 1: return `Monday\xa0`;
        case 2: return `Tuesday`;
        case 3: return `Wednesday`;
        case 4: return `Thursday\xa0`;
        case 5: return `Friday\xa0`;
        case 6: return `Saturday\xa0`;
    }
}

Date.prototype.getHoursString = function() {
    return (this.getHours() === 0 ? 12 : (this.getHours() % 12)).toLocaleString('en-US', {minimumIntegerDigits: 2});
}

Date.prototype.getMinutesString = function() {
    return this.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2});
}

Date.prototype.getSecondsString = function() {
    return this.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2});
}

Date.prototype.getDateString = function() {
    let i = this.getDate();
    let j = i % 10, k = i % 100;
    if (j == 1 && k != 11) {
        return i.toLocaleString('en-US', {minimumIntegerDigits: 2}) + "st";
    }
    if (j == 2 && k != 12) {
        return i.toLocaleString('en-US', {minimumIntegerDigits: 2}) + "nd";
    }
    if (j == 3 && k != 13) {
        return i.toLocaleString('en-US', {minimumIntegerDigits: 2}) + "rd";
    }
    return i.toLocaleString('en-US', {minimumIntegerDigits: 2}) + "th";
}

function init() {
    let hour = document.querySelector("#hour");
    let minute = document.querySelector("#minute");
    let second = document.querySelector("#second");
    let phase = document.querySelector("#phase");
    let day = document.querySelector("#day");
    let month = document.querySelector("#month");
    let date = document.querySelector("#date");

    setInterval(() => {
        let dateTime = new Date();

        hour.replaceChildren(document.createTextNode(dateTime.getHoursString()));
        minute.replaceChildren(document.createTextNode(dateTime.getMinutesString()));
        second.replaceChildren(document.createTextNode(dateTime.getSecondsString()));
        phase.replaceChildren(document.createTextNode(dateTime.getHours() > 12 ? "PM" : "AM"));
        day.replaceChildren(document.createTextNode(dateTime.getDayString()));
        month.replaceChildren(document.createTextNode(dateTime.getMonthString()));
        date.replaceChildren(document.createTextNode(dateTime.getDateString()));
    }, 100);
}

init();