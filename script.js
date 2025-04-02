const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
