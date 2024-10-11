// 1. Write a program that displays current date and time in your browser.
var time = new Date();
console.log(time)


// 2. Write a program that alerts the current month in words. For example December.
var currentDate = new Date();
var months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
var currentMonthIndex = currentDate.getMonth();
var currentMonth = months[currentMonthIndex];
alert(currentMonth);


// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
var currentDate = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDayIndex = currentDate.getDay();
var currentDay = days[currentDayIndex];
var currentDayShort = currentDay.substring(0, 3);
alert(currentDayShort);