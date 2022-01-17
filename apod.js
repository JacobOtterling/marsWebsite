function dateMax() {
    const today = new Date().toISOString().slice(0, 10);
    document.getElementById("datepicker").setAttribute("max", today);
}

window.onload = dateMax;

const btn = document.querySelector('.btn');
const apikey = '?api_key=jbiHo01XJDCQX9PkpBdf7HCE9tHfkUPm8fWxqvkg'
const url = 'https://api.nasa.gov/planetary/apod'

const title = document.querySelector('.title-img');
const copyright = document.querySelector('.copyright-img');
const date = document.querySelector('.date-img');
const mediaSection = document.querySelector(".media-section");
const information = document.querySelector('.description-img');
const videoSection = `<div class="video-div"> <iframe id="videoLink" src="" frameborder="0"></iframe></div>`
const imageSection =`<a id="hdimg" href="" target="-blank">
     <div class="image-div">
     <img id="image_of_the_day" src="" alt="">
     </div>
     </a>`



const fetchData = async () =>{
    let date = document.getElementById('datepicker').value;
    try {
        const response = await fetch(url + apikey + '&date=' + date)
        const json = await response.json()
        console.log(json)
        displayData(json)
    } catch(error){
        console.log(error)
    }
}


function displayData(data){
    title.innerHTML = data.title;   
    if (data.hasOwnProperty('copyright')){
        copyright.innerHTML = data.copyright;
    } else {
        copyright.innerHTML = ''
    }
    if (data.media_type === 'video'){
        mediaSection.innerHTML = videoSection;
        document.getElementById('videoLink').src = data.url;
    } else {
        mediaSection.innerHTML = imageSection;
        document.getElementById('hdimg').href = data.hdurl;
        document.getElementById('image_of_the_day').src = data.url;
    }
     information.innerHTML = data.explanation
}

btn.addEventListener('click', fetchData);