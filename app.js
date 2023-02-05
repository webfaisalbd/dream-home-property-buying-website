let people = document.getElementById('people');
let peopleLess = document.getElementById('people_less');
let peopleMore = document.getElementById('people_more');

let numberOfPeople = 3;

peopleMore.addEventListener('click', ()=> {
    numberOfPeople = numberOfPeople + 1;
    people.value = `${numberOfPeople} People`;
})

peopleLess.addEventListener('click', ()=> {
    if(numberOfPeople >1){
    numberOfPeople = numberOfPeople - 1;
    people.value = `${numberOfPeople} People`;
    }
})