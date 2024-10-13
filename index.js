//Q NO 1
var time = new Date();
console.log(time)


// Q NO 2
var currentDate = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonthIndex = currentDate.getMonth();
var currentMonth = months[currentMonthIndex];
alert(currentMonth);


// Q NO 03
var currentDate = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDayIndex = currentDate.getDay();
var currentDay = days[currentDayIndex];
var currentDayShort = currentDay.substring(0, 3);
alert(currentDayShort);


// Q N0 04
var today = new Date();
var day = today.getDay();
if (day === 0 || day === 6) {
    alert("It’s Fun day!");
}


//    Q NO 05
var today = new Date();
var date = today.getDate();
if (date < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}


// Q NO 06
var currentDate = new Date();
var millisecondsSinceEpoch = currentDate.getTime();
var minutesSinceEpoch = millisecondsSinceEpoch / (1000 * 60)
console.log("Minutes since midnight, Jan. 1, 1970: " + Math.floor(minutesSinceEpoch));


//    Q NO 07
var currentDate = new Date();
var currentHour = currentDate.getHours();
if (currentHour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}


//  Q NO 08

var laterDate = new Date(2020, 11, 31);
console.log("Later Date: " + laterDate);


//    Q NO 09
var ramadanStartDate = new Date(2015, 5, 18);
var currentDate = new Date();
var timeDifference = currentDate - ramadanStartDate;
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
alert("Number of days passed since 1st Ramadan: " + daysPassed);


// Q NO 10
var referenceDate = new Date();
var startOf2015 = new Date(2015, 0, 1);
var timeDifference = referenceDate - startOf2015;
var secondsElapsed = Math.floor(timeDifference / 1000);
document.getElementById("result").innerText = "Seconds elapsed since January 1, 2015: " + secondsElapsed + "Second has passed since bigning of 2015";


// Q NO 11
var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);

document.getElementById("output").innerText = "Updated Date and Time (1 hour ahead): " + currentDate;


// Q NO 12
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert("Date 100 years back: " + currentDate.toDateString());


// Q NO 13
var age = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.getElementById("age").innerText = "Your birth year is: " + birthYear;


//  Q NO 14
var generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', function () {
    var customerName = document.getElementById('customerName').value;
    var units = parseFloat(document.getElementById('units').value);
    var chargesPerUnit = parseFloat(document.getElementById('charges').value);
    var lateSurcharge = parseFloat(document.getElementById('lateSurcharge').value);
    var netAmountPayable = (units * chargesPerUnit).toFixed(2);
    var grossAmountPayable = (parseFloat(netAmountPayable) + lateSurcharge).toFixed(2);
    var currentMonth = new Date().toLocaleString('default', { month: 'long' });


    var billSummary = `
                Customer Name: ${customerName} <br>
                Current Month: ${currentMonth} <br>
                Number of Units: ${units} <br>
                Charges per Unit: ${chargesPerUnit.toFixed(2)} <br>
                Net Amount Payable (within Due Date): ${netAmountPayable} <br>
                Late Payment Surcharge: ${lateSurcharge.toFixed(2)} <br>
                Gross Amount Payable (after Due Date): ${grossAmountPayable}
            `;

    document.getElementById('billResult').innerHTML = billSummary;
});
