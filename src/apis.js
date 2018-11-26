
// acquire info about a specific network
export const bikeInfo = function bikeInfo(network) {
  fetch(`https://api.citybik.es/v2/networks/${network}`, {})
    .then(response => response.json())
    .then(response => {
// if there are stations withing this network save that station list in state
// otherwise throw no stations error
      response.network.stations.length > 0
        ? this.setState({ stations: response.network.stations })
        : this.setState({ stations: null });
    })
    .catch(error => {
      this.setState({errorState: true});
    });
};

// not an API call, but provides greater specificity for networkList API
// call below
const getLocationSpecifics = (response, desiredKey) => {
  const totalResults = response.networks
    .map(network => network.location[desiredKey])
    .sort();
  const uniqueResults = Array.from(new Set(totalResults));
  return uniqueResults;
};

// access all all of the networks within the API on componentDidMount
// and save them in state to be processed by the user
export const networkList = function networkList() {
  fetch("https://api.citybik.es/v2/networks?fields=name,location,id", {})
    .then(response => response.json())
    .then(response =>{
      const countries = getLocationSpecifics(response, 'country')
      this.setState({
        countries: countries,
        activeCountry: countries[0],
        networks: response.networks
      })
    })
    .catch(error => {
      this.setState({errorState: true});
    });
};
