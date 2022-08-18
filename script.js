<<<<<<< HEAD
//Search button functionalities for searching on 'Click'
document.querySelector(".btn").addEventListener("click", () =>{
  search();
=======
let weather = {
  apiKey: "386617448263377540e5e4979cdd4474",
  fetchWeather: function (city){
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { temp, humidity, feels_like } = data.main;
    const { description, icon } = data.weather[0];
    const { speed } = data.wind;
    console.log(name, temp, humidity, feels_like, description, icon);
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".feels_like").innerHTML =
      "Feels Like: " + feels_like + "°C";
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".humidity").innerHTML =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerHTML =
      "Wind Speed: " + speed + "km/hr";
    document.querySelector(".weather").classList.remove("loading");
    document.querySelector(".github").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-content").value);
  },
};

document.querySelector(".btn").addEventListener("click", function (){
  weather.search();
>>>>>>> 8f4e7263d4113f67d1f8baeb03477514d5a4a35d
});

//Enter button functionalities for searching on 'Enter'
document
<<<<<<< HEAD
  .querySelector(".search-content").addEventListener("keyup", (event) => {
=======
  .querySelector(".search-content")
  .addEventListener("keyup", function (event){
>>>>>>> 8f4e7263d4113f67d1f8baeb03477514d5a4a35d
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