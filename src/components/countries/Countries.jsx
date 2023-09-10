// import React from 'react'

import { useEffect, useState } from 'react'
import Country from './Country';
export default function Countries() {
    const [countries, setCountries] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        const URL = "https://restcountries.com/v3.1/all";
        fetch(URL)
        .then(res => res.json())
        .then(data => setCountries(data))
        // countries.forEach(c => {
        // })
        console.log(countries);
        
    }, [])
    // }, [count]) 

    const showCountry = () => {
        setCount(count+1)
    }
    return (
        <>
            <div onClick={showCountry}>Countries: {countries.length} </div>
            <div>
                {
                    // Country
                    countries.map((country => <Country country={country}></Country>))
                }
            </div>
        </>
        
    )
}
