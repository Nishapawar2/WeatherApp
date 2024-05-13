import React, { useState } from 'react'
import "./SearchBar.css";
const SearchBar = ({onsearch}) => {
  const [city,setCity]=useState("");
const handleSearch=()=>{
  onsearch(city);
}
  return (
    <div className='searchbar'>
   <input type='text' onChange={(e)=>setCity(e.target.value)} value={city} placeholder='Enter city name'/>
   <button onClick={handleSearch}>Search</button>
   </div>
  )
}

export default SearchBar