//let loc = [] ;
let inputCity = document.getElementById('inputCity')

// next day
let max =document.getElementById("max-degree"),
    min = document.getElementById("min-degree"),
    description = document.getElementById('nextDay-description'),
    icon = document.getElementById('nextDay-icon'),
    nextDay = document.getElementById('nextDay')
//next day1
let max1 =document.getElementById("max-degree1"),
    min1 = document.getElementById("min-degree1"),
    description1 = document.getElementById('nextDay-description1'),
    icon1 = document.getElementById('nextDay-icon1'),
    nextDay1 = document.getElementById('nextDay1')
//let currentArray = new current;
monthName = ['Jan','Feb','March','April','May','June','July','Aug','Spet','Oct','Nov','Dec'];
   days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

 async function rsApi(City) 
{
  
   let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${City}&days=4`)
   let resJson = await res.json()
   console.log(resJson)
    await displayTOday(resJson)
    await displayNextDay(resJson)
    await displayNextDay1(resJson)

  
}
rsApi('usa')
//console.log(currentArray)

function inputTerm() 
{
  let term = inputCity.value
  
    rsApi(term)
   
}

/***************** beforeCleanCode**************/
/***************** disPlayTOday***************/
function  displayTOday(currentNew) 
{
  let currentFinal = [];
  currentFinal.push(currentNew)
  let date = new Date();
 console.log(date)
 let stor = '';
  for (let index = 0; index < currentFinal.length; index++) 
  {
   stor = `<div class="day-and-date d-flex justify-content-between">
                <p id="today">ToDay</p>
                <p id="today-date">${date.getDate()} ${ monthName[date.getMonth()]}</p>
              </div>
              <div class="temp-datails">
                <p id="location"><span>${currentFinal[index].location.country}</span></p>
                <div class="d-flex justify-content-between my-4">
                  <div class="pt-3">
                  
                  <h2 id="today-degree" class="d-inline-block">${currentFinal[index].current.temp_c}</h2><h2 class="d-inline-block"><sup>o</sup>C</h2>
                  </div>
                  <img src="https:${currentFinal[index].current.condition.icon}" class ='w-90'  alt="">
                </div>
                <p id="today-description">${currentFinal[index].current.condition.text}</p>
                <div class="details">
                  <i class="fas fa-umbrella pr-1"></i>
             
                  <span id="humidty"></span>${currentFinal[index].current.humidity}<span>%</span>

                  <i class="fas fa-wind pl-3 pr-1"></i>
                  <span id="wind">${currentFinal[index].current.gust_kph}</span> 
                  <span>km/h</span>

                  <i class="far fa-compass pl-3 pr-1"></i>
                  <span id="compass">${currentFinal[index].current.wind_dir}</span>
                </div>
              </div>
  `
   document.getElementById('crud').innerHTML = stor ;
   console.log(currentFinal[index].current.feelslike_c)

  }
}
/***************** afterCleanCode**************/
/***************** disPlayNextDay**************/
function displayNextDay(nextDay)
{
   nextDay.innerHTML = `Tomorrow`
   max.innerHTML  = nextDay.forecast.forecastday[1].day.maxtemp_c
   min.innerHTML = nextDay.forecast.forecastday[1].day.mintemp_c
   description.innerHTML = nextDay.forecast.forecastday[1].day.condition.text;
   icon.setAttribute ( `src`,`https:${nextDay.forecast.forecastday[1].day.condition.icon}`)
   console.log( days[new Date(nextDay.forecast.forecastday[2].date).getDay()])
}
/***************** disPlayNextDay1**************/
function displayNextDay1(nextDay)
{
   
   nextDay1.innerHTML = `After Tomorrow`;
   max1.innerHTML  = nextDay.forecast.forecastday[2].day.maxtemp_c;
   min1.innerHTML = nextDay.forecast.forecastday[2].day.mintemp_c;
   description1.innerHTML = nextDay.forecast.forecastday[2].day.condition.text;
   icon1.setAttribute ( `src`,`https:${nextDay.forecast.forecastday[2].day.condition.icon}`)
   console.log(nextDay.forecast.forecastday[1].day.condition.text)
}
