<!-- // Example: Handling multiple buttons to target corresponding divs by dynamic ID

function setupButtonListeners() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      const id = button.getAttribute('data-id'); // Get dynamic number
      const targetDiv = document.getElementById('sul-' + id); // Build ID
      
      // Example effect: Change background color
      targetDiv.style.backgroundColor = 'yellow';
    });
  });
}

// Call the function to set up listeners
setupButtonListeners();


// Example: Hiding target divs by dynamic class name (with corrected mistake)
// Mistake in original: document.getAttribute('data-id') is invalid - 'document' has no such attribute.
// Correction: Use button.getAttribute('data-id') to get the correct value from the clicked button.

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const ids = button.getAttribute('data-id'); // Corrected: get data-id from the button itself
        const targetDiv = document.querySelector('.cd-' + ids); // find corresponding div
        targetDiv.style.display = 'none'; // hide the div
    });
});


// Explanation: querySelector and querySelectorAll usage
// querySelector() can select any valid CSS selector:
// - ID: document.querySelector('#myId');
// - Class: document.querySelector('.myClass');
// - Tag: document.querySelector('div');
// - Attribute: document.querySelector('[type="text"]');
// - Combination: document.querySelector('div.myClass');
// - Pseudo-class: document.querySelector('button:hover');
// querySelectorAll() works the same but returns all matches instead of the first one.


// Explanation: Why element.getAttribute('data-id') is used instead of document.getAttribute()
// - document represents the entire HTML page — it does not have data attributes.
// - button (or any element) represents an actual DOM element — which can have data attributes.
// Example:
// <button data-id="5">Click</button>
// const button = document.querySelector('button');
// const id = button.getAttribute('data-id'); // returns "5"
// Trying document.getAttribute('data-id') will fail because document has no such attribute.


// Other Scenarios where getAttribute is used:
// 1. Links:
// <a href="#" data-type="pdf">Download</a>
// const link = document.querySelector('a');
// const type = link.getAttribute('data-type'); // "pdf"

// 2. Images:
// <img src="img.jpg" data-description="view">
// const img = document.querySelector('img');
// const desc = img.getAttribute('data-description'); // "view"

// 3. Div:
// <div data-user="admin"></div>
// const div = document.querySelector('div');
// const user = div.getAttribute('data-user'); // "admin"

// 4. List Items:
// <li data-index="1"></li>
// const items = document.querySelectorAll('li');
// items.forEach(item => console.log(item.getAttribute('data-index'))); -->




// const container = document.getElementById('cd-twelve');
// const remove = document.getElementById('remove_12');


// remove.addEventListener('click', () => {
//     container.style.display = 'none';
// });



const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('click', () => {
        const ids = button.getAttribute('data-id');
        const targetDiv = document.querySelector('.cd-' + ids);
        targetDiv.style.display = 'none';
    });
});


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

const body = document.querySelector('#body');
const toggle = document.querySelector('#icon');


toggle.addEventListener('click', function () {
    body.classList.toggle('bright');
});



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