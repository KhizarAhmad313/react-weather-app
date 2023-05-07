const API_KEY = "793f5d1eba6f892287eabf9b2287ce15"; //API key for authentication

const makeIconURL = (iconId) =>
  `https:openweathermap.org/img/wn/${iconId}@2x.png`; //making icon url for dynamic icon of weather

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`; //fetching weather data from api server

  const data = await fetch(URL)
    .then((res) => res.json()) //converting the fetched data to json
    .then((data) => data); //storing the fetched data to "data" variables

  //object destructuring for getting the limited data
  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;
  const { description, icon } = weather[0];
  return {
    name,
    description,
    iconURL: makeIconURL(icon),
    country,
    speed,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
  };
};

export { getFormattedWeatherData };
