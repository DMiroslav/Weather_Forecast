const city = document.getElementById("city");
const send = document.getElementById("send");
const cloud = document.getElementById("cloud");
const temp = document.getElementById("temp");
const pressure = document.getElementById("pressure");
const humidityy = document.getElementById("humidity");
const windspeed = document.getElementById("windspeed");

send.addEventListener("click", () => {
    let cityName = city.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=adffb4581ae568ef21dd3369c79fc967`;
    getData(url);
});

async function getData(url) {
    try {
        let data = await (await fetch(url)).json();
        cloud.textContent = data.weather[0].description;
        temp.textContent = Math.round(data.main.temp - 273,15);
        pressure.textContent = data.main.pressure;
        humidityy.textContent = data.main.humidity;
        windspeed.textContent = data.wind.speed;

        let cityName = city.value;
        let b = `Погода у населиному пункті :  " ${cityName} ".`;
        document.getElementById("mes1").innerHTML =(b);
        document.getElementById("mes2").innerHTML =("");
    } catch(error) {
        cloud.textContent = "missing";
        temp.textContent = "missing";
        pressure.textContent = "missing";
        humidityy.textContent = "missing";
        windspeed.textContent = "missing";
        
        let cityName = city.value;
        let a = ` Погоди по цьому населеному пункті - " ${cityName} " - на жаль, на сайті немає.`;
        document.getElementById("mes1").innerHTML =("");
        document.getElementById("mes2").innerHTML =(a);
    }
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();
  
  setInterval(myTimer, 1000);

  function myTimer() {
    const d = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[d.getDay()];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[d.getMonth()];
    document.getElementById("time").innerHTML = 
    d.getDate() + "  " + month + "  " + d.getFullYear() + "  " + day + "  " + d.toLocaleTimeString();
  }