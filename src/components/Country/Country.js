import React from 'react';
import './Country.css';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const history = useHistory();
   const {name, capital, flag, region} = props.country;
   const handleClick = (name) => {
    history.push(`/detail/${name}`);
  }
    return (
        <div className="country-container">
            <img className="flag-img" src={flag} alt=""/>
             <h2>Country:{name}</h2>
            <h3>Capital:{capital}</h3>
            <h4>{region}</h4>
    
    <Link to={`/detail/${name}`}>Show Details Of {name}</Link>
     <br/> <br/>
    <button className="click-btn" onClick={() => handleClick(name)}>Click Me!</button>
        </div>
    );
};

export default Country;