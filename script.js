const container = document.getElementById('container');
const text = document.getElementById('text');
const button = document.getElementById('toggleButton');

button.addEventListener('click', () => {
    if (container.style.backgroundColor === 'skyblue') {
        container.style.backgroundColor = 'lightgreen';
        text.textContent = 'This is the initial text that has to be changed.';
        button.textContent = 'Submit';
        button.style.backgroundColor = 'blue';
    } else {
        container.style.backgroundColor = 'skyblue'; 
        text.textContent = 'New text that has changed from initial text.';
        button.textContent = 'Reset';
        button.style.backgroundColor = 'green';
    }
});
