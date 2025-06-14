



const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('click', () => {
        const ids = button.getAttribute('data-id');
        const targetDiv = document.querySelector('.cd-' + ids);
        targetDiv.style.display = 'none';
    });
});




//Question can in put a one section of function in a wrap so that other function wont affect it?

const body = document.querySelector('#body');
const toggle = document.querySelector('#icon');


toggle.addEventListener('click', function () {
    body.classList.toggle('bright');
});


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










