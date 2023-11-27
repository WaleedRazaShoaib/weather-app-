let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

//Function to fetch weather details from api and display them
let getWeather = () => {
  let cityValue = cityRef.value;
  //If input field is empty
  if (cityValue.length === "" ) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  }
  //If input field is NOT empty
  else {
    //Clear the input field
    cityRef.value = "";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=e9f0bb4ad3ef0e872bfe69983b5d117e&units=metric`)
      .then((resp) => resp.json())
      //If city name is valid
      .then((all) => {
        console.log(all);
        console.log(all.weather[0].icon);
        console.log(all.weather[0].main);
        console.log(all.weather[0].description);
        console.log(all.name);
        console.log(all.main.temp_min);
        console.log(all.main.temp_max);
        result.innerHTML = `
        <h2>${all.name}</h2>
        <h4 class="weather">${all.weather[0].main}</h4>
        <h4 class="desc">${all.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${all.weather[0].icon}.png">
        <h1>${all.main.temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${all.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${all.main.temp_max}&#176;</h4>
            </div>
        </div>
        `;
      })
      //If city name is NOT valid
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
