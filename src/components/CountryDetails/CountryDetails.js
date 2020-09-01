import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css';

const CountryDetails = () => {
    
    const {name} = useParams();
    const [detail, setDetail] = useState({});
    

    useEffect(() => {
        const link = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(link)
        .then(res => res.json())
        .then(data => setDetail(data[0]));
    }, [])

    return (
        <div className="detail">
            <h1>Country Details of {name}</h1>
            <img className="flag-img" src={detail.flag} alt=""/>
            <h2>Capital: {detail.capital}</h2>
            <h3>Region: {detail.region}</h3>
            <h3>Code: {detail.alpha3Code}</h3>
            <h3>Dymonym: {detail.demonym}</h3>
            <h4>Area: {detail.area}</h4>
            <p>Population: {detail.population}</p>
            
        </div>
    );
};

export default CountryDetails;