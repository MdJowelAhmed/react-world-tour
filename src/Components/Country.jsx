import { useState } from "react";
import "./country.css";
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const[visited,setVisited]=useState(false)

    const handleVisited=()=>{
        setVisited(!visited);
    }
   
   
    const {name,flags,capital,area,population,coatOfArms}=country
    return (
        <div className="country">
            <h2>Name:{name?.common} </h2>
            <img src={flags.png} alt="" />
            <h3>Capital:{capital} </h3>
            <p>Area:{area} </p>
            <p>population:{population} </p>
            <img id="img" src={coatOfArms.png} alt="" /> <br />
            <button onClick={()=> handleVisitedCountry(country)}>Mark Visit</button> <br />
            <button onClick={handleVisited}>{visited?'visited': 'going'}</button> <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flags</button>
            {visited ?'i am visited this country': 'I want to visit'}
        </div>
    );
};

export default Country;