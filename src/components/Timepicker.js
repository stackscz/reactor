import React from 'react';
import connectToStores from 'alt/utils/connectToStores.js';
import _ from 'lodash';

class Timepicker extends React.Component {

	handleValueChanged(event) {

	}


	render() {
		return (
			<input type="text" onChange={this.handleValueChanged} />
		);
	}

}

module.exports = Timepicker;
