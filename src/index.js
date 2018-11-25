import React from "react";
import ReactDOM from 'react-dom'
import { bikeInfo, networkList } from "./apis.js";
import {getCountryCities, getCityNetworks, setNetwork} from './handlers.js';
import { Hero } from './hero.js'
import { BikeLocation } from "./bikeLocation";
import './index.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // the total networks coming back from the citybik(filled on componentDidMount)
      networks: [],
      // the total countries coming back from the citybik(filled on componentDidMount)
      countries: [],
      // stations at any given city-country-network filled from bikeInfo()
      stations: [],
      // set on user select of country - getCountryCities()
      activeCountry: "",
      cityList: ["Abu Dhabi", "Al Ain", "Dubai"],
      // set on user select of country - getCountryCities() or getCityNetworks()
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
    //first request to API to get all the network data the user will need for
    //the rest of their session
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

  getBikeInfo = (e) => {
    e.preventDefault()
    const filteredNetworks = this.state.networks
      .filter(network => network.name === this.state.activeNetwork)
      .map(network => network.id)
      .join();
    this.bikeInfo(filteredNetworks);
  };

  createDropdownOptions = (stateKey, value) => (
    this.state[stateKey].map(value => {
      return <option key={value}>{value}</option>
    })
  )

  createStationContainers = () => {
    if (this.state.stations === null) {
      return <BikeLocation name={"No Stations Found"} />;
    } else {
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

    return (
    <React.Fragment>
      <Hero
      getCountryCities={this.getCountryCities.bind(this)}
      getCityNetworks={this.getCityNetworks}
      setNetwork={this.setNetwork}
      createDropdownOptions={this.createDropdownOptions.bind(this)}
      getBikeInfo={this.getBikeInfo.bind(this)}
      />
      <h4>Bicycle Network: {this.state.activeNetwork}</h4>
        {this.createStationContainers()}
    </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
