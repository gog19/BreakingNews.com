const key = '69948d6972b54434aa6d695020c2fcb5';

let formGroup = $_('.form-group');
let input = $_('.input');


function showResult(evt) {
  evt.preventDefault();
  let url = `https://newsapi.org/v2/everything?q=${input.value}&apiKey=${key}`;

  console.log(url);
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(result => {
      console.log(result);
    })
}

formGroup.addEventListener('submit', showResult)