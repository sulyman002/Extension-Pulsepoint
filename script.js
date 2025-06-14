// const container = document.getElementById('cd-twelve');
// const remove = document.getElementById('remove_12');


// remove.addEventListener('click', () => {
//     container.style.display = 'none';
// });



// const buttons = document.querySelectorAll('button');

// buttons.forEach(button => {

//     button.addEventListener('click', () => {
//         const ids = button.getAttribute('data-id');
//         const targetDiv = document.querySelector('.cd-' + ids);
//         targetDiv.style.display = 'none';
//     });
// });


// const brightness = document.querySelector('.header>div:last-child>img');
// const body = document.querySelector('body');
// const card_bg = document.querySelector('.card');

// let brightnessChange = false;

// brightness.addEventListener('click', function () {
//     if (brightnessChange) {
//         brightness.classList.toggle('icon-moon');
//         body.style.backgroundColor = '#fff';
//         body.style.transition = '5s'
//         card_bg.style.backgroundColor = '#fff';
//     }else{
//         brightness.classList.toggle('icon-sun');
//         // body.style.backgroundColor = 'var(--color-neutral-900)';
//         card_bg.style.backgroundColor = 'grey';
//     }
//     brightnessChange = !brightnessChange;
// });

//Question can in put a one section of function in a wrap so that other function wont affect it?

// const body = document.querySelector('#body');
// const toggle = document.querySelector('#icon');


// toggle.addEventListener('click', function () {
//     body.classList.toggle('bright');
// });



// const cardContainer = document.querySelector('.cards_container'); //The collect the card container which is the parent

// const cardarray = [...document.querySelectorAll('.card')]; //collect all cards and put them in an array format in js

// const all = document.querySelector('.all'); //collect the button all
// const active = document.querySelector('.active'); //collect the button active
// const inactive = document.querySelector('.inactive'); //collect the button inactive

// const inputs = document.querySelectorAll('input[type="checkbox"]'); //collect the input tag the type of checkbox
// const checkedInputs = Array.from(inputs).filter(input => input.checked); //this filter the input checkbox that is checked in side our array.

// const checkedCards = checkedInputs.map(input => input.closest('.card')); //This takes the input tag back to its parent container.
// const move = checkedCards.closest('.cardContainer');



// active.addEventListener('click', function() {
//     if()
// });


const all = document.querySelector('.all');
const active = document.querySelector('.active');
const inactive = document.querySelector('inactive');
const cards = document.querySelectorAll('.card');

function filterCards(filterType) {
  cards.forEach(card => {
    const checkbox = card.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;

    if (filterType === 'all') {
      card.style.display = 'block';
    } else if (filterType === 'active') {
      card.style.display = isChecked ? 'block' : 'none';
    } else if (filterType === 'inactive') {
      card.style.display = !isChecked ? 'block' : 'none';
    }
  });
}


all.addEventListener('click', () => filterCards('all'));
active.addEventListener('click', () => filterCards('active'));
inactive.addEventListener('click', () => filterCards('inactive'));




// active.addEventListener('click', () => {
//     cardContainer.style.display = 'grid';

// });






// all.addEventListener('click', function () {
//     cardContainer.style.display = 'grid';
// });