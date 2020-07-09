/*body elements */
const dayElem = document.getElementById('myDay');
const monthElem = document.getElementById('myMonth');
/**excercise */
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];
let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentDay = 0;
let currentMonth = 0;
const showNewDay = n =>{
    currentDay += n;
    if (currentDay > days.length - 1)
        currentDay = 0;
    if (currentDay < 0)
        currentDay = days.length;
    console.log(days.length);
    dayElem.innerHTML = days[currentDay];
};
const showNewMonth = n =>{
    currentMonth += n;
    if (currentMonth > months.length)
        currentMonth = 0;
    if (currentMonth < 0)
        currentMonth = months.length;
    console.log(days.length);
    monthElem.innerHTML = months[currentMonth];
};

/**onload body effects */
dayElem.innerHTML = showNewDay(0);
monthElem.innerHTML = showNewMonth(0);