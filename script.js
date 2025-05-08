// -----------------------weather app start--------------------



const apiKey ='64cc9af3b12fb85df1893129a4b2500b';
const apiUrl ='https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';


const searchBox = document.querySelector('.serach input')
const serachbtn = document.querySelector('.serach button')
const weatherIcon = document.querySelector('.weather-icon')


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none'
    }else{

        var data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML =Math.round(data.main.temp)+ "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main =="Clouds"){
            weatherIcon.src = 'images/clouds.png';
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = 'images/clear.png';
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = 'images/rain.png';
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = 'images/drizzle.png';
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = 'images/mist.png';
        }

        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = 'none';
    }
        
}
    
serachbtn.addEventListener('click' , ()=>{
    checkWeather(searchBox.value)
})
checkWeather();


// -----------------------weather app end----------------------

// -----------------------speech-converte start------------------

let speech = new SpeechSynthesisUtterance()

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{  
    voices = window.speechSynthesis.getVoices(); 
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))); 
};


voiceSelect.addEventListener("change" , () =>{

    speech.voice = voices[voiceSelect.value] 

});

document.querySelector(".conv-btn").addEventListener("click", () =>{    
    speech.text = document.querySelector("textarea").value;             
    window.speechSynthesis.speak(speech);                                
});
// -----------------------speech-converte end--------------------


// ----------------------- drag downstart--------------------

let lists = document.getElementsByClassName('list');
let rightBox = document.getElementById('dragDown-right')
let leftBox = document.getElementById('dragDown-left')

for(list of lists){
    list.addEventListener('dragstart' , function(e){
        let selected = e.target;

        rightBox.addEventListener('dragover', function(e){
            e.preventDefault();
        })

        rightBox.addEventListener('drop' , function(e){
            rightBox.appendChild(selected);
            selected = null;
        });

        leftBox.addEventListener('dragover', function(e){
            e.preventDefault();
        })

        leftBox.addEventListener('drop' , function(e){
            leftBox.appendChild(selected);
            selected = null;
        });
    })
}

// -----------------------  drag down end--------------------


// -----------------------start--------------------
// -----------------------end--------------------


// -----------------------start--------------------
// -----------------------end--------------------


