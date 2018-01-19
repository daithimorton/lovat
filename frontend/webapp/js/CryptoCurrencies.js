import React from 'react';
import axios from 'axios';
import AssetPair from '../js/AssetPair';

class CryptoCurrencies extends React.Component {

	constructor(props) {
  	super(props);
  	this.state = {
			data : this.props.data,
			pollInterval: this.props.pollInterval,
			dataEndpointUrl: '/kraken'
		};
		this.loadDataFromServer = this.loadDataFromServer.bind(this)
	}

	loadDataFromServer(component, apiUrl) {
		axios.get(apiUrl).then(function(res) {
			var dataList = res.data.list;
			component.setState({
				data : dataList
			});
		});
	}

	componentDidMount() {
		this.loadDataFromServer(this, this.state.dataEndpointUrl);
        setInterval(this.loadDataFromServer.bind(null, this, this.state.dataEndpointUrl), this.state.pollInterval);
	}

	render(){
	    let dataItems = "";
	    if(this.state.data !== null && this.state.data.length > 0) {
            let self = this;
            dataItems = this.state.data.map(function (item) {
                return <AssetPair data={item} key={item.id} url={self.state.dataEndpointUrl}/>
            });
        }

		return (
			<div>
				<h2 className="text-center">Crypto</h2>
				<ul>
					{dataItems}
				</ul>
			</div>
		)
	}
}

export default CryptoCurrencies;
