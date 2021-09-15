
const input=document.getElementById('get-data');
input.addEventListener("keypress",function(event){
    if(event.keyCode === 13){
        get_data(input.value);
        let main=document.getElementsByClassName("icon_body")[0].classList;
        main.remove('haze','sunny','rain','snow','cloudy');
    }
});

function get_data(city){
    let error_box=document.getElementById('error');
    if(city==""){
        error_box.style.display="block";
    }else{
        error_box.style.display="none";
        let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c015423dc8d3dc39eeeec9d7a5ebe507`;
        fetch(api).then((res)=>{
            return res.json();
        }).then((ans)=>{
            if(ans.cod ==404){
                error_box.style.display="block";
            }else{
                error_box.style.display="none";
                set_data(ans,city);
            }
        });
    }
}

function set_Time(){
    let now=new Date();

    let date=now.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let mon=months[now.getMonth()];

    let year=now.getFullYear();

    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day=dayNames[now.getDay()];

    
    let date_string=`${date} ${mon}|${day}|${year}`;
    document.getElementsByClassName('date')[0].innerText=date_string;
}

set_Time()
function isNight() {
    var date = new Date();
    return (date.getHours() > 20 || date.getHours() < 6);
}
function set_data(res,city){
    let weather_cond=res.weather[0].main;
    let temp=res.main.temp;
    temp=Math.ceil(temp-273.15);
    let min_temp=res.main.temp_min;
    min_temp=Math.ceil(min_temp-273.15);
    let max_temp=res.main.temp_max;
    max_temp=Math.ceil(max_temp-273.15);
    let country=res.sys.country;
    document.getElementById("temp").innerText=`${temp}`;
    document.getElementsByClassName("max_min_temp")[0].innerHTML=`<span>${min_temp}&#8451;/${max_temp}&#8451;`;
    document.getElementsByClassName("weather")[0].innerHTML=`${weather_cond}`;

    document.getElementsByClassName("city_name")[0].innerText=`${city},${res.sys.country}`;
    let main=document.getElementsByClassName("icon_body")[0].classList;

    switch(weather_cond){
        case 'Haze': main.add('haze');break;
        case 'Rain':main.add('rain');break;
        case 'Snow':main.add('Snow');break
        case 'Clouds':main.add('cloudy');break;
        default :
        if(isNight()){
            main.add('moon');
        }else{
            main.add('sunny');
        }
        break;
    }
      
}




