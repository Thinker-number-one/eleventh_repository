fetch('https://api.openweathermap.org/data/2.5/weather?lat=55.7522200&lon=37.6155600&appid=34db8ddd6d7522918954b1cdd89ed66a')

.then(function(resp) {
    return resp.json()
})

.then(function(data) {
    console.log(data);
    console.log(data.name);
    document.querySelector('.city-name').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273,15) + '°'
    document.querySelector('.desc').innerHTML = data.weather[0].description

    document.querySelector('.skorost').innerHTML = Math.round(data.name.wind)
    document.querySelector('.vlagnost').innerHTML = Math.round(data.name.humidity)
    document.querySelector('.strana').innerHTML = data.sys.country
    document.querySelector('.voshod').innerHTML = Math.round(data.sys.sunrise)
    document.querySelector('.zakat').innerHTML = Math.round(data.sys.sunset)
})