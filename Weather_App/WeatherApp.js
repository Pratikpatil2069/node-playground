import readline from "readline";


const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const key="6ed98c279a5792c8e4e39c95fe811158";
const url="http://api.openweathermap.org/data/2.5/weather";

const city=rl.question("enter the city :",async(city)=>{
        const base_url=`${url}?q=${city}&appid=${key}&units=metric`;
        const response=await fetch(base_url);
        if(!response.ok){
            console.log("please enter the correct city name!");
            rl.close();
            return;
        }else{
            const weather_data=await response.json();
             console.log("\n🌤 Weather Data:");
        console.log("City:", weather_data.name);
        console.log("Temperature:", weather_data.main.temp, "°C");
        console.log("Weather:", weather_data.weather[0].description);
        }
        rl.close();

})