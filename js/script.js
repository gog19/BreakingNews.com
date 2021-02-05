let general = $_('.form-group')
let inputValue = $_('.input')

general.addEventListener('submit', evt => {
  evt.preventDefault();

  fetch(`https://newsapi.org/v2/everything?q=${inputValue.value}&apiKey=f8576b990f454e098ec4dc89cc795bc6`)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
    });
})