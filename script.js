//0dabdf9d4f5cf37ffefdd74cc5a89f08
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
let apiKey="0dabdf9d4f5cf37ffefdd74cc5a89f08"
let baseURL="https://api.openweathermap.org/data/2.5/weather"
let imgURL="https://openweathermap.org/img/wn/10d@2x.png"
let input=document.getElementById("text")
let temperature=document.getElementById("temperature")
let place=document.getElementById("place")
let wind=document.getElementById("wind-value")
let humidity=document.getElementById("humidity-value")
let pressure=document.getElementById("pressure-value")
let image=document.getElementById("image")

function current()
{
  navigator.geolocation.getCurrentPosition(async (result)=>{
    let lat=result.coords.latitude
    let long=result.coords.longitude
   await fetch(`${baseURL}?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`)
   .then((res)=>res.json())
   .then((msg)=>{ temperature.textContent=Math.round(msg.main.temp)+"°C",
   wind.textContent=msg.wind.speed+" km/hr",
   humidity.textContent=msg.main.humidity+" %",
   pressure.textContent=msg.main.pressure+" hPa"
   place.textContent=msg.name
   let icon=msg.weather[0].icon
   image.src=`https://openweathermap.org/img/wn/${icon}@2x.png`
})
  })}

current()

function Weather(input)
{
    let city=input.value
    let fullURL=`${baseURL}?q=${city}&appid=${apiKey}&units=metric`
    fetch(fullURL)
    .then((res)=>res.json())
    .then((msg)=>{temperature.textContent=Math.round(msg.main.temp)+"°C",
        wind.textContent=msg.wind.speed+" km/hr",
        humidity.textContent=msg.main.humidity+" %",
        pressure.textContent=msg.main.pressure+" hPa"
        place.textContent=msg.name
        let icon=msg.weather[0].icon
        image.src=`https://openweathermap.org/img/wn/${icon}@2x.png`
        console.log(msg.wind.speed)
        })
    .catch((err)=>{console.log(err)})

    
}
//    