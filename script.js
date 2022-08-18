//Search button functionalities for searching on 'Click'
document.querySelector(".btn").addEventListener("click", () =>{
  search();
});

//Enter button functionalities for searching on 'Enter'
document.querySelector(".search-content").addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
      search();
    }
  });

//Getting values from 'INPUT' and invoking fetchWeather()
function search() {
  const cityName = document.querySelector(".search-content").value;
  fetchWeather(cityName.toLowerCase());
}

const apiKey = "386617448263377540e5e4979cdd4474";

//Function for triggering API for the searched City
function fetchWeather(city) {
  //If city is already searched then code will enter this block
  if(isDataUpdated(city)){
    const data = JSON.parse(localStorage.getItem(city));
    displayWeather(data);
  }
  //If city is searched for the first time then code will enter this block
  else{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey;
    //fetching url using FetchAPI
    fetch(url)
      .then((response) => response.json())
      .then((data) => displayWeather({...data, time: Date.now()})) //Calling displayWeather() to display the data
      .catch(error => { //added check so that if someone enters invalid data then error is thrown
        return alert('Enter valid city/state/country name', error);
      })
  }
}

//Function to check if City Weather data is present in teh LocalStorage or Not
function isDataUpdated(city){
  if(localStorage.getItem(city) == null) return false;
  const diff = getTimeDiff(city);
  return (diff < 600000);
}

//Function to get time difference between two API calls
function getTimeDiff(city){
  const currTime = Date.now();
  const data = JSON.parse(localStorage.getItem(city));
  const storedTime = data.time;
  return currTime - storedTime;
}

//Inserting/Updating weather along with time in Local Storage
function updateLocalStorage(data){
  localStorage.setItem(data.name.toLowerCase(), JSON.stringify(data));
}

//Deconstructing the data fetched from fetchWeather() and Displaying it using DOM properties
function displayWeather(data) {
  //Deconstructing the data
  const { name } = data;
  const { temp, humidity, feels_like } = data.main;
  const { description, icon } = data.weather[0];
  const { speed } = data.wind;
  //Saving data into local storage
  updateLocalStorage(data);
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