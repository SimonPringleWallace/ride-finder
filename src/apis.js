// I've changed nothing - it works

export const bikeInfo = function bikeInfo(network) {
  console.log(`bikeinfo triggered network is ${network}`);
  fetch(`https://api.citybik.es/v2/networks/${network}`, {})
    .then(response => response.json())
    .then(response => {
      response.network.stations.length > 0
        ? this.setState({ stations: response.network.stations })
        : this.setState({ stations: null });
    })
    .catch(error => {
      console.log(error);
    });
};

//problem is with filteredNetworks in seeNetworks

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
      console.log(error);
    });
};

const getLocationSpecifics = (response, desiredKey) => {
  const totalResults = response.networks
    .map(network => network.location[desiredKey])
    .sort();
  const uniqueResults = Array.from(new Set(totalResults));
  return uniqueResults;
};
