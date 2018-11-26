(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){t.exports=n(24)},18:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a=n(5),r=n(6),i=n(9),o=n(7),s=n(10),c=n(1),l=n(0),u=n.n(l),m=n(8),f=n.n(m),k=function(t){var e=this;fetch("https://api.citybik.es/v2/networks/".concat(t),{}).then(function(t){return t.json()}).then(function(t){t.network.stations.length>0?e.setState({stations:t.network.stations}):e.setState({stations:null})}).catch(function(t){e.setState({errorState:!0})})},p=function(){var t=this;fetch("https://api.citybik.es/v2/networks?fields=name,location,id",{}).then(function(t){return t.json()}).then(function(e){var n=function(t,e){var n=t.networks.map(function(t){return t.location[e]}).sort();return Array.from(new Set(n))}(e,"country");t.setState({countries:n,activeCountry:n[0],networks:e.networks})}).catch(function(e){t.setState({errorState:!0})})},w=n(2),h=n.n(w),b=n(3),y=function(){var t=Object(b.a)(h.a.mark(function t(e){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({activeCountry:e.target.value,displayNetworkName:"",bikeLocationToggle:!1});case 2:return t.next=4,this.filterCities();case 4:this.filterNetworks();case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(b.a)(h.a.mark(function t(e){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({activeCity:e.target.value,displayNetworkName:"",bikeLocationToggle:!1});case 2:return t.next=4,this.filterNetworks();case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),v=function(t){this.setState({activeNetwork:t.target.value,displayNetworkName:"",bikeLocationToggle:!1})},N=(n(18),function(t){var e=t.getCountryCities,n=t.getCityNetworks,a=t.setNetwork,r=t.createDropdownOptions,i=t.getBikeInfo;return u.a.createElement("div",{className:"hero"},u.a.createElement("h2",null,"Ride Finder"),u.a.createElement("h6",null,"Powered by the ",u.a.createElement("a",{href:"https://api.citybik.es/v2/"}," CityBik API")),u.a.createElement("div",{className:"selections"},u.a.createElement("label",null,"Country:"),u.a.createElement("select",{onChange:e},r("countries","country")),u.a.createElement("label",null,"City:"),u.a.createElement("select",{onChange:n},r("cityList","city")),u.a.createElement("label",null,"Network:"),u.a.createElement("select",{onChange:a},r("networkOptions","network"))),u.a.createElement("form",{onSubmit:i},u.a.createElement("button",null,"Find Bikes")))}),E=(n(20),function(t){var e=t.name,n=t.free_bikes,a=t.empty_slots,r=t.timestamp;return u.a.createElement("div",{className:"location-flex"},u.a.createElement("p",{className:"header"},e),u.a.createElement("div",{className:"bike-stats"},u.a.createElement("div",{className:"free-bikes"},u.a.createElement("h2",null,n),u.a.createElement("p",null,"Free Bikes")),u.a.createElement("div",{className:"Empty Slots"},u.a.createElement("h2",null,a),u.a.createElement("p",null,"Empty Slots"))),u.a.createElement("p",{className:"footer"},r))}),C=(n(22),function(t){function e(){var t;return Object(a.a)(this,e),(t=Object(i.a)(this,Object(o.a)(e).call(this))).componentDidMount=function(){t.networkList()},t.filterCities=function(){var e=t.state.networks.filter(function(e){return e.location.country===t.state.activeCountry}).map(function(t){return t.location.city}).sort();e=Array.from(new Set(e)),t.setState({cityList:e,activeCity:e[0]})},t.filterNetworks=function(){var e=t.state.networks.filter(function(e){return e.location.city===t.state.activeCity}).map(function(t){return t.name}).sort();t.setState({networkOptions:e,activeNetwork:e[0]})},t.getBikeInfo=function(e){e.preventDefault(),t.setState({displayNetworkName:t.state.activeNetwork,bikeLocationToggle:!0});var n=t.state.networks.filter(function(e){return e.name===t.state.activeNetwork}).filter(function(e){return e.location.city===t.state.activeCity}).map(function(t){return t.id}).join();t.bikeInfo(n)},t.createDropdownOptions=function(e,n){return t.state[e].map(function(t){return u.a.createElement("option",{key:t},t)})},t.createStationContainers=function(){return t.state.errorState?u.a.createElement(E,{name:"An Error Occured"}):null===t.state.stations?u.a.createElement(E,{name:"No Stations Found"}):t.state.bikeLocationToggle?t.state.stations.map(function(t){return u.a.createElement(E,{key:t.id,name:t.name,free_bikes:t.free_bikes,empty_slots:t.empty_slots,timestamp:t.timestamp})}):u.a.createElement("div",null)},t.state={networks:[],countries:[],stations:[],activeCountry:"",cityList:["Abu Dhabi","Al Ain","Dubai"],activeCity:"Abu Dhabi",activeNetwork:"ADCB Bikeshare",networkOptions:["ADCB Bikeshare"],displayNetworkName:"",bikeLocationToggle:!1,errorState:!1},t.bikeInfo=k.bind(Object(c.a)(Object(c.a)(t))),t.networkList=p.bind(Object(c.a)(Object(c.a)(t))),t.getCountryCities=y.bind(Object(c.a)(Object(c.a)(t))),t.getCityNetworks=d.bind(Object(c.a)(Object(c.a)(t))),t.setNetwork=v.bind(Object(c.a)(Object(c.a)(t))),t}return Object(s.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(N,{getCountryCities:this.getCountryCities.bind(this),getCityNetworks:this.getCityNetworks,setNetwork:this.setNetwork,createDropdownOptions:this.createDropdownOptions.bind(this),getBikeInfo:this.getBikeInfo.bind(this)}),u.a.createElement("h4",null,"Bicycle Network: ",this.state.displayNetworkName),this.createStationContainers())}}]),e}(u.a.Component));f.a.render(u.a.createElement(C,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.b3144550.chunk.js.map