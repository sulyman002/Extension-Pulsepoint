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