import React from 'react'
import './Hero.css'


export const Hero = ({getCountryCities, getCityNetworks, setNetwork, createDropdownOptions, getBikeInfo}) => (

<div className='hero'>
  <h2>Ride Finder</h2>
  <h6>Powered by the <a href='https://api.citybik.es/v2/'> CityBik API</a></h6>
    <div className='selections'>
         <label>Country:</label>
         <select onChange={getCountryCities}>
            {createDropdownOptions('countries', 'country')}
         </select>

          <label>City:</label>
          <select onChange={getCityNetworks}>
            {createDropdownOptions('cityList', 'city')}
          </select>

          <label>Network:</label>
          <select onChange={setNetwork}>
            {createDropdownOptions('networkOptions', 'network')}
          </select>

          <form onSubmit={getBikeInfo}><button>Find Bikes</button></form>
    </div>
  </div>
)
