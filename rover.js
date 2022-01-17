
/* For fetchData */
const exampleURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY'
const urlBegin = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'
const urlDate = '/photos?earth_date='
const apiKey = '&api_key=jbiHo01XJDCQX9PkpBdf7HCE9tHfkUPm8fWxqvkg'

const btn = document.querySelector('.btn');


/* For displayData */
const missionCaption = document.querySelector('.missionCaption');
const ignitionFailure = document.querySelector('.ignitionFailure')
const mediaSection = document.querySelector(".media-section");
const imageSection =`<a id="hdimg" href="" target="-blank">
     <div class="image-div">
     <img id="rover-image" src="" alt="">
     </div>
     </a>`




const fetchData = async() =>{
    let rover = document.getElementById('Rover');
    let roverUser = rover.options[rover.selectedIndex].text;
    let date = document.getElementById('datepicker').value;
    try{
        const response = await fetch(urlBegin + roverUser + urlDate + date + apiKey)
        const json = await response.json()
        console.log(json)
        displayData(json)
    } catch(error){
        console.log(error)
    }
}


function displayData(data) {
    /* Display data and write if statememt for if array has length 0 (no photos) */
    mediaSection.innerHTML = imageSection;
    if(data.photos.length > 0){
        document.getElementById('rover-image').src = data.photos[0].img_src;
        missionCaption.innerHTML = data.photos[0].rover.name + ' ' + document.getElementById('datepicker').value;
        ignitionFailure.innerHTML = null;
    }
    else{
        ignitionFailure.innerHTML = 'Image not found. Please try another date or rover!'
        document.getElementById('rover-image').src = null;
        missionCaption.innerHTML = null;

    }
    
}




btn.addEventListener('click',fetchData);