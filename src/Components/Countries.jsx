import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import "./countries.css";

const Countries = () => {
    const [countries,setCountries]=useState([])
    const [visitedCountries,setVisitedCountries]=useState([])
    const [visitedFlags,setVisitedFlags]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    const handleVisitedCountry=(country)=>{
        // console.log('add to visited country')
        const newVisitedCountries=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFlags=(flag)=>{
        const newFlags=[...visitedFlags,flag]
        setVisitedFlags(newFlags)
    }
    return (
        <div>
            <h2>Countries:{countries.length} </h2>
            <div>
                <h3>visited country:{visitedCountries.length} </h3>
                <ol>
                   {
                     visitedCountries.map(country=> <li key={country.cca2}>{country.name.common} </li>)
                   }
                </ol>
            </div>
            <div className="flags-container">
                <h3>Visited Country Flags:{visitedFlags.length} </h3>
                <ul>
                  {visitedFlags.map((flag, idx)=> <li><img key={idx} src={flag}></img></li>)}
                </ul>
            </div>
            <div className="countries">
            {
                countries.map(country=><Country key={country.cca2} 
                    handleVisitedCountry={handleVisitedCountry}  
                    handleVisitedFlags={handleVisitedFlags}  
                country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;