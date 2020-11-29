const submitbtn = document.getElementById("submitbtn");
const citytext = document.getElementById("cityname");
const citytext1 = document.getElementById("city_name");
const temperature = document.getElementById("temperature");
const temp_status = document.getElementById("temp_status");
// const day = document.getElementById("day");
// const today_date = document.getElementById("today_date");

var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("today_date").innerHTML = d.getDate()+months[d.getMonth()];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("day").innerHTML = days[d.getDay()];


const cityname = citytext.value;
const getinfo = async (event) => {
    event.preventDefault();

    if (cityname === " ") {
        // alert("plzzz enter the city name");
        citytext1.innerText =`plzzzz write the name of city`;

    } else {
        citytext1.innerText =citytext.value;
        try
        {let url = `http://api.openweathermap.org/data/2.5/weather?q=${citytext.value}&units=metric&appid=767e1ec8fc9264cad628c70f59ee9273`;
        const response = await fetch(url);
        const data = await response.json();
        const tempu=data.main.temp;
        temperature.innerText=tempu
        temp_status.innerText=data.weather[0].main;
          console.log(data);
    
    
    }
        catch{

        }
    }
}



submitbtn.addEventListener('click', getinfo)