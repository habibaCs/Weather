let searchInput = document.getElementById("search-input");
let search = document.getElementById("search");

let firstDay = document.querySelector(".first-day");
let firstDayDetails = document.querySelector(".day-one-details");

let secondDay = document.querySelector(".second-day");
let secondDayDetails = document.querySelector(".day-two-details");

let thirdDay = document.querySelector(".third-day");
let thirdDayDetails = document.querySelector(".day-three-details");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

async function getSearchApi(apiJson) {
  if (!apiJson) return;
  const api = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=866fd6b01c2f4579b04204047240907&q=${apiJson}&days=3`
  );
  apiJson = await api.json();

  const firstDayForecast = apiJson.forecast.forecastday[0];
  let Day1 = new Date(firstDayForecast.date);

  firstDay.innerHTML = `<div class="day">${days[Day1.getDay()]}</div>
                <div class="date">${
                  Day1.getDate() + months[Day1.getMonth()]
                }</div>`;

  firstDayDetails.innerHTML = `<div class="location"><p>${
    apiJson.location.name
  }</p></div>
                <div class="degree text-center">${apiJson.current.temp_c.toFixed(
                  1
                )}<sup>o</sup>C</div>
                <div class="degree-icon">
                  <img src="${
                    apiJson.current.condition.icon
                  }" width="90" alt="" />
                </div>
                <div class="custom">${apiJson.current.condition.text}</div>
                <span><img src="imgs/icon-umberella@2x.png" alt="" />20%</span>
                <span><img src="imgs/icon-wind@2x.png" alt="" />18km/h</span>
                <span><img src="imgs/icon-compass@2x.png" alt="" />East</span>`;

  const secondDayForecast = apiJson.forecast.forecastday[1];
  let Day2 = new Date(secondDayForecast.date);
  secondDay.innerHTML = `
  <div class="day">${days[Day2.getDay()]}</div>`;
  secondDayDetails.innerHTML = `<div class="degree">
                  <div class="degree-icon">
                    <img src="${secondDayForecast.day.condition.icon}" width="48" alt="" />
                  </div>
                  <p>${secondDayForecast.day.maxtemp_c}<sup>o</sup>C</p>
                </div>
                <span>${secondDayForecast.day.mintemp_c}<sup>o</sup></span>
                <div class="custom">${secondDayForecast.day.condition.text}</div>`;

  const thirdDayForecast = apiJson.forecast.forecastday[2];
  console.log(thirdDayForecast);
  let Day3 = new Date(thirdDayForecast.date);
  thirdDay.innerHTML = `
  <div class="day">${days[Day3.getDay()]}</div>`;
  thirdDayDetails.innerHTML = `
                  <div class="degree">
                  <div class="degree-icon">
                    <img src="${thirdDayForecast.day.condition.icon}" width="48" alt="" />
                  </div>
                  <p>${thirdDayForecast.day.maxtemp_c}<sup>o</sup>C</p>
                </div>
                <span>${thirdDayForecast.day.mintemp_c}<sup>o</sup></span>
                <div class="custom">${thirdDayForecast.day.condition.text}</div>`;
}

searchInput.addEventListener("keyup", function (e) {
  getSearchApi(e.target.value);
});
search.addEventListener("submit", function (e) {
  e.preventDefault();
  getSearchApi();
});
getSearchApi("london");
getSearchApi("Londrina");
getSearchApi("Londonderry");
getSearchApi("Londerzeel");
getSearchApi("cairo");


