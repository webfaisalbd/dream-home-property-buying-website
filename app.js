let people = document.getElementById('people');
let peopleLess = document.getElementById('people_less');
let peopleMore = document.getElementById('people_more');

let numberOfPeople = 3;

// people more button 
peopleMore.addEventListener('click', () => {
    numberOfPeople = numberOfPeople + 1;
    people.value = `${numberOfPeople} People`;
})

// people less button 
peopleLess.addEventListener('click', () => {
    if (numberOfPeople > 1) {
        numberOfPeople = numberOfPeople - 1;
        people.value = `${numberOfPeople} People`;
    }
})


// appointment change input
let appointmentDate = document.getElementById('appointmentDate');
let setDate = document.getElementById('setDate');

setDate.addEventListener('change', () => {
    let choosenData = setDate.value;

    let dates = new Date(choosenData);

    // day 
    let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let day = dates.getDay();
    let dayName = week[day];


    // month 
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let monthName = month[dates.getMonth()];

    // date 
    let date = dates.getDate();

    // today date 
    let todayDate = new Date();


    if (dates > todayDate) {
        appointmentDate.textContent = `${dayName}, ${date} ${monthName}`;
    }
    // console.log(dayName + ', ' + date + ' ' + monthName)
})



//  appointment  previous day 
let people_previous = document.getElementById('people_previous');

people_previous.addEventListener('click', () => {
    let choosenData = setDate.value;
    let update = new Date(choosenData);
    let previousDate = update.getDate() - 1;

    let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let weekValue = update.getDay() - 1;
    let previousDay;
    if (weekValue == -1) {
        previousDay = week[6];
    } else {
        previousDay = week[weekValue];
    }
    // console.log(previousDay);

    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let previousMonth = month[update.getMonth()];

    // console.log(previousDay, previousDate, previousMonth);
    appointmentDate.textContent = `${previousDay}, ${previousDate} ${previousMonth}`;
    
})



//  appointment  next day
let people_next = document.getElementById('people_next');

people_next.addEventListener('click', () => {
    let choosenData = setDate.value;
    let update = new Date(choosenData);
    let nextDate = update.getDate() + 1;
    
    let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let weekValue = update.getDay() + 1;
    let nextDay;
    if(weekValue == 7){
        nextDay = week[0];
    }
    else {
        nextDay = week[weekValue];
    }
    // console.log(nextDay);

    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let nextMonth = month[update.getMonth()];

    // console.log(nextDay, nextDate, nextMonth)
    appointmentDate.textContent = `${nextDay}, ${nextDate} ${nextMonth}`;
})





// counter start
let sold = document.getElementById('sold');
let client = document.getElementById('client');
let family = document.getElementById('family');
let experience = document.getElementById('experience');

var num = 0;

function counter(upTo, idName) {
    if(num<upTo){
        num++;
        idName.innerText = num;
    }
}

// for sold 
setInterval(()=> counter(500,sold), 100);

// for client 
setInterval(()=> counter(400,client), 100);

// for sold 
setInterval(()=> counter(350,family), 100);

// for client 
setInterval(()=> counter(12,experience), 100);

// counter end 