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