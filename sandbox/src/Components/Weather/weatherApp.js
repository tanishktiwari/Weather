import "./weather.css";
import search_icon from "../Assets/search.png";
// import cloudy_icon from "../Assets/cloudy.png";
import drop_icon from "../Assets/drop.png";
// import rain_icon from "../Assets/rain.png";
// import snow_icon from "../Assets/snow.png";
import sun_icon from "../Assets/sun.png";
import wind_icon from "../Assets/wind.png";
export const WeatherApp = () => {
  let api_key = "5116f931224d05aefc34132130cf1268";
  const search = async() => {
    const element  = document.getElementsByClassName("search-bar")
    console.log(element[0].value, "ELEMENT");
    if(element[0].value ==="")
    {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("current Data", data);
    if(data!=null){
      const {weather,main, wind,name} = data;
      console.log("weather" + weather);
      const humidityContainer = document.getElementsByClassName("humid-percentage");
      const windContainer = document.getElementsByClassName("wind-speed");
      const temperature = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");
      humidityContainer[0].innerHTML = main.humidity;
      windContainer[0].innerHTML = wind.speed;
      temperature[0].innerHTML = main.temp;
      location[0].innerHTML = name;
    }
    
    
    

  }
  return (
    <div className="container">
      <div className="searchBox">
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="search_icon" onClick ={()=> {search()}}>
        <img src={search_icon} alt="search_icon" />
      </div>
      </div>
      <div className="weather">
        <img src={sun_icon} alt="sun_icon" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">Delhi</div>
      <div className="humwind">
        <div className="humid">
          <img src={drop_icon} alt="drop_icon" />
          <div className="data">
            <div className="humid-percentage">64%</div>
            <div className="text">Humidity</div>
            {/* <img src={drop_icon} alt="drop_icon" /> */}
          </div>
        </div>
        <div className="wind">
          <img src={wind_icon} alt="wind_icon" />
          <div className="data">
            <div className="wind-speed">18km/h</div>
            <div className="text">Wind</div>
          </div>
        </div>
      </div>
    </div>
  );
};
// export { weatherApp };
