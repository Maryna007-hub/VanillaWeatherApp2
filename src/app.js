function formatDate(timestamp) {
    // calculate the date
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
      }
    if (hours < 10) {
        hours = `0${hours}`;
      }
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}
function displayTemperature(response) {

    let temperatureElement = document.querySelector('#temperature');
    let cityElement = document.querySelector('#city');
    let descriptionElement = document.querySelector('#description1');
    let humidityElement = document.querySelector('#humidity');
    let windElement = document.querySelector('#wind');
    let dateElement = document.querySelector('#date');
    let iconElement = document.querySelector('#icon');

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute('src', `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute('alt', response.data.weather[0].description);
}
function search(city) {
    let apiKey = "ed7bf7f5cf99619f0aa2717501c76f85";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(displayTemperature);    
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector('#city-input');
   search(cityInputElement.value);
}
function displayFahrenheitTemperature(event) {
    event.preventDefault();
    alert('Link clicked');
    let fahrenheitTemperature = (temperatureElement.innerHTML * 9 / 5) + 32
    alert(fahrenheitTemperature);
    let temperatureElement = document.querySelector('#temperature');
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

search('Lisbon');
  let form = document.querySelector('#search-form');
  form.addEventListener('submit', handleSubmit);

  let fahrenheitLink = document.querySelector('#fahrenheit-link');
  fahrenheitLink,addEventListener('click', displayFahrenheitTemperature);


