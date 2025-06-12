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