const key = '81e4d675-03ba-4ac6-9aca-5acdb9ad4641';

let formGroup = $_('.form-group');
let input = $_('.input');


function showResult(evt) {
  evt.preventDefault();
  let url = `https://content.guardianapis.com/search?q=${input.value}&api-key=${key}`

  fetch(url)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(result => {
      console.log(result.response.results);
    })
}

formGroup.addEventListener('submit', showResult)