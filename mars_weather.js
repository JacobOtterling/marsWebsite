const url = 'https://api.maas2.apollorion.com/'

const description = document.querySelector('.description');
const minTemp = document.querySelector('.display-min-temp');
const maxTemp = document.querySelector('.display-max-temp');
const pressure = document.querySelector('.display-pressure');
const sunrise = document.querySelector('.display-sunrise');
const sunset = document.querySelector('.display-sunset');
const terrestrialDate = document.querySelector('.display-terrestial-date');
const solDate = document.querySelector('.display-sol-date');


const fetchData = async () =>{
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        displayData(data)
    } catch (error){
        console.log(error)
    }
}

function displayData(json) {
    description.innerHTML = json.atmo_opacity
    minTemp.innerHTML = json.min_temp + "°C"
    maxTemp.innerHTML = json.max_temp + "°C"
    pressure.innerHTML = json.pressure + ' pa'
    sunrise.innerHTML = json.sunrise
    sunset.innerHTML = json.sunset

    let earthDateUnFormated = json.terrestrial_date
    let earthDateFormated = earthDateUnFormated.split('T')
    terrestrialDate.innerHTML = earthDateFormated[0]

    solDate.innerHTML = json.sol
}

window.onload = fetchData;