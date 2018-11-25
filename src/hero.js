import React from 'react'


export const Hero = ({getCountryCities, getCityNetworks, setNetwork, createDropdownOptions, getBikeInfo}) => (
<div className='hero'>
  <h2>Ride Finder</h2>
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
)
// <h2>Ride Finder</h2>
//    <label>Country:</label>
//    <select onChange={this.getCountryCities}>
//       {this.createDropdownOptions('countries', 'country')}
//    </select>
//     <label>City:</label>
//     <select onChange={this.getCityNetworks}>
//       {this.createDropdownOptions('cityList', 'city')}
//     </select>
//     <label>Network:</label>
//     <select onChange={this.setNetwork}>
//       {this.createDropdownOptions('networkOptions', 'network')}
//     </select>
