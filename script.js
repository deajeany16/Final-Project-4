function SearchWeather(event) {
    const city = document.getElementById('city').value

    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q='+ city +'&days=1', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '112152885emsh438c4fa29c23b9ep1e16f2jsn4cb3ca2992c8',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
        })
        .then(response => response.json())
        .then((data) => {
                document.getElementById('namecity').innerText = data.location.name
                document.getElementById('namecountry').innerText = data.location.country
                document.getElementById('weather-img').src = data.current.condition.icon
                document.getElementById('conditions').innerText = data.current.condition.text
                document.getElementById('temperatures').innerText = data.current.temp_c
                document.getElementById('windspeed').innerText = data.current.wind_kph
                document.getElementById('timeupdated').innerText = data.current.last_updated
        })
        .catch(err => alert("Data Invalid!"));
}