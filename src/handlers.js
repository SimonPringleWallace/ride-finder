export const getCountryCities = async function getCountryCities(e) {
  await this.setState({ activeCountry: e.target.value });
  await this.filterCities();
  this.filterNetworks()
};

export const getCityNetworks = async function getCityNetworks(e) {
  await this.setState({ activeCity: e.target.value });
  await this.filterNetworks()
};

export const setNetwork = function setNetwork(e) {
  this.setState({ activeNetwork: e.target.value });
}
