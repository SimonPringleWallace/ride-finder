import React from "react";
import ReactDOM from 'react-dom'
import { bikeInfo, networkList } from "./apis.js";
import { BikeLocation } from "./bikeLocation";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      networks: [],
      countries: [],
      stations: [],
      activeCountry: "",
      cityList: ["Abu Dhabi", "Al Ain", "Dubai"],
      activeCity: "Abu Dhabi"
    };
    this.bikeInfo = bikeInfo.bind(this);
    this.networkList = networkList.bind(this);
  }

  componentDidMount = () => {
    this.networkList();
  };

  filterCities = () => {
    const filteredCities = this.state.networks
      .filter(network => network.location.country === this.state.activeCountry)
      .map(network => network.location.city)
      .sort();
    this.setState({ cityList: filteredCities, activeCity: filteredCities[0] });
  };

  seeNetworks = (e) => {
    e.preventDefault()
    console.log(`networks ${this.state.networks}`)
    const filteredNetworks = this.state.networks
      .filter(network => network.location.city === this.state.activeCity)
      .map(network => network.id)
      .join();
    this.bikeInfo(filteredNetworks);
  };

  handleChange = async(e) => {
    await this.setState({ activeCity: e.target.value });
  };

  getCountryCities = async event => {
    await this.setState({ activeCountry: event.target.value });
    this.filterCities();
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
    console.log(`this.state.activeCountry = ${this.state.activeCountry}`);
    console.log(`this.state.activeCity = ${this.state.activeCity}`);
    const countryOptions = this.state.countries.map(country => {
      return <option key={country}>{country}</option>;
    });
    const cityOptions = this.state.cityList.map(city => {
      return <option key={city}>{city}</option>;
    });

    return (
      <div className='root'>
        <h2>BlueBikes</h2>
        <select onChange={this.getCountryCities}>{countryOptions}</select>
          <select onChange={this.handleChange}>{cityOptions}</select>
          <form onSubmit={this.seeNetworks}><button>Find Bikes</button></form>
        {this.createStationContainers()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
