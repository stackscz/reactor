import React from 'react';
import _ from 'lodash';

export default class Btn extends React.Component {

	render() {
		var className = 'Btn ' + this.props.className;
		return (
			<button className={className}>
				{this.props.children}
			</button>
		);
	}

}
