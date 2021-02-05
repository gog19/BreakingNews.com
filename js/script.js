let general = $_('.general')

general.addEventListener('click', evt => {
  fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=f8576b990f454e098ec4dc89cc795bc6')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
    });
})