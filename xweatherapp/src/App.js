import "./App.css";
import SearchBar from "./SearchBar";
import { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  const [city, setCity] = useState();
  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };
  return (
    <div className="App">
      <SearchBar onsearch={handleSearch} />
      <WeatherDisplay city={city} />
    </div>
  );
}

export default App;
