function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector('#temperature');
    let cityElement = document.querySelector('#city');
    let descriptionElement = document.querySelector('#description');

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
     descriptionElement.innerHTML = response.data.wheather[0].main;
}

let apiKey = "ed7bf7f5cf99619f0aa2717501c76f85";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
