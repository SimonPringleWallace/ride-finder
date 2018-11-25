import React from "react";
import ReactDOM from 'react-dom'
import { bikeInfo, networkList } from "./apis.js";
import {getCountryCities, getCityNetworks, setNetwork} from './handlers.js';
import { BikeLocation } from "./bikeLocation";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // the total networks coming back from the citybik(filled on componentDidMount)
      networks: [],
      //
      countries: [],
      stations: [],
      activeCountry: "",
      cityList: ["Abu Dhabi", "Al Ain", "Dubai"],
      activeCity: "Abu Dhabi",
      activeNetwork:"ADCB Bikeshare",
      networkOptions:['ADCB Bikeshare']
    };
    // get information about number of bikes and slots at various stations
    this.bikeInfo = bikeInfo.bind(this);
    // get the list of all of the networks (bike share providers) in the citybik
    this.networkList = networkList.bind(this);
    // get all the cities for a selected country
    this.getCountryCities = getCountryCities.bind(this);
    // get all the networks for a selected city
    this.getCityNetworks = getCityNetworks.bind(this);
    // set an active network after it is selected by a user
    this.setNetwork = setNetwork.bind(this);
  }

  componentDidMount = () => {
    this.networkList();
  };

  filterCities = () => {
    let filteredCities = this.state.networks
      .filter(network => network.location.country === this.state.activeCountry)
      .map(network => network.location.city)
      .sort();
      filteredCities = Array.from(new Set(filteredCities))
    this.setState({ cityList: filteredCities, activeCity: filteredCities[0] });
  };

filterNetworks = () => {
  const networkOptions = this.state.networks
  .filter(network => network.location.city === this.state.activeCity)
  .map(network => network.name)
  .sort()
  this.setState({networkOptions: networkOptions, activeNetwork: networkOptions[0]})
}

  seeNetworks = (e) => {
    e.preventDefault()
    const filteredNetworks = this.state.networks
      .filter(network => network.name === this.state.activeNetwork)
      .map(network => network.id)
      .join();
      console.log(filteredNetworks)
    this.bikeInfo(filteredNetworks);
  };

  createStationContainers = () => {
    console.log("createStationContainers triggered");
    if (this.state.stations === null) {
      console.log("createStationContainers if block triggered");
      return <BikeLocation name={"No Stations Found"} />;
    } else {
      console.log("createStationContainers else block triggered");
      return this.state.stations.map(station => (
        <BikeLocation
          key={station.id}
          name={station.name}
          free_bikes={station.free_bikes}
          empty_slots={station.empty_slots}
          timestamp={station.timestamp}
        />
      ))
     }
    }

  render() {
    console.log(`this.state.networkOptions = ${this.state.networkOptions}`);
    console.log(`this.state.activeCountry = ${this.state.activeCountry}`);
    console.log(`this.state.activeCity = ${this.state.activeCity}`);

    const countryOptions = this.state.countries.map(country => {
      return <option key={country}>{country}</option>;
    });
    const cityOptions = this.state.cityList.map(city => {
      return <option key={city}>{city}</option>;
    });
    const networkOptions = this.state.networkOptions.map(network => {
      return <option key={network}>{network}</option>;
    });

    return (
      <div className='root'>
      <h2>Ride Finder</h2>
        <select onChange={this.getCountryCities}>{countryOptions}</select>
          <select onChange={this.getCityNetworks}>{cityOptions}</select>
          <select onChange={this.setNetwork}>{networkOptions}</select>
          <form onSubmit={this.seeNetworks}><button>Find Bikes</button></form>
          <h4>Bicycle Network: {this.state.activeNetwork}</h4>
        {this.createStationContainers()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
