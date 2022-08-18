//Search button functionalities for searching on 'Click'
document.querySelector(".btn").addEventListener("click", () =>{
  search();
});

//Enter button functionalities for searching on 'Enter'
document
  .querySelector(".search-content").addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
      search();
    }
  });

//Getting values from 'INPUT' and invoking fetchWeather()
function search() {
  fetchWeather(document.querySelector(".search-content").value);
}

const apiKey = "386617448263377540e5e4979cdd4474";

//Function for triggering API of the searched City
function fetchWeather(city) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey)
    .then((response) => response.json())
    .then((data) => displayWeather(data)); //Calling displayWeather() to display the data
}

//Deconstructing the data fetched from fetchWeather() and Displaying it using DOM properties
function displayWeather(data) {
  //Deconstructing the data
  const { name } = data;
  const { temp, humidity, feels_like } = data.main;
  const { description, icon } = data.weather[0];
  const { speed } = data.wind;
  //Displaying the data
  document.querySelector(".city").innerHTML = "Weather in " + name;
  document.querySelector(".temp").innerHTML = temp + "°C";
  document.querySelector(".feels_like").innerHTML =
    "Feels Like: " + feels_like + "°C";
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerHTML = description;
  document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + "km/hr";
  document.querySelector(".weather").classList.remove("loading");
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + name + "')";
}