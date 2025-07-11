import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=679e8071db3b4f85d55600ef9aed91e7`);
      const data = await response.json();
      console.log(data, "data");
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }
  useEffect(() => {
    fetchWeatherData("Shahjahanpur");
  }, []);

  async function handleSearch() {
    fetchWeatherData(search);
  }

  console.log(weatherData)

  return (
    <div >
      <Search 
      search={search} 
      setSearch={setSearch} 
      handleSearch={handleSearch} />
      {loading?( <div className="text-5xl font-extrabold text-black" >Loading...</div> ):(
      <div  >
        <div >

          <div className="text-4xl font-extrabold mb-[18px]" >
            <h1>{weatherData?.name},<span>{weatherData?.sys?.country}</span></h1>
          </div>

          <div className="text-[18px] font-medium italic mb-[25px]" >
            <span>{getCurrentDate()}</span>
          </div>

          <div className="text-5xl text-black font-bold items-center">
            {weatherData?.main?.temp}
          </div>

          <p className="text-2xl font-medium mb-[20px]">
            {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ''}
          </p>

          <div className="flex justify-evenly items-center mt-[20px] font-xl font-bold">
            <div className="flex items-center ">
              <div>
                <p className="text-2xl">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div>
              <div>
                <p className="text-2xl">{weatherData?.main?.humidity}</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}