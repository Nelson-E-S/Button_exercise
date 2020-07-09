/*body elements */
const dayElem = document.getElementById('myDay');
const monthElem = document.getElementById('myMonth');
/**excercise */
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];
let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let daysLength = days.length - 1;
let monthsLength = months.length - 1;
let currentDay = 0;
let currentMonth = 0;
const showNewDay = n =>{
    currentDay += n;
    if (currentDay > daysLength)
        currentDay = 0;
    if (currentDay < 0)
        currentDay = daysLength;
    dayElem.innerHTML = days[currentDay];
};
const showNewMonth = n =>{
    currentMonth += n;
    if (currentMonth > monthsLength)
        currentMonth = 0;
    if (currentMonth < 0)
        currentMonth = monthsLength;
    monthElem.innerHTML = months[currentMonth];
};

/**onload body effects */
dayElem.innerHTML = days[0];
monthElem.innerHTML = months[0];