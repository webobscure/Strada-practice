const btn = document.querySelector('#btn');
const FIRST_NAME = document.getElementById('input');
const SERVER_URL = 'https://api.genderize.io';
const RESULT = document.getElementById('result')
btn.addEventListener('click', function (event) {
    event.preventDefault();
    let name = FIRST_NAME.value;
    let url = `${SERVER_URL}?name=${name}`;
    fetch(url)
    .then((response) => response.json())
    .then((commits) => (RESULT.textContent = commits.gender));
});