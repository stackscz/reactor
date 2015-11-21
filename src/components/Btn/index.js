import React from 'react';
import _ from 'lodash';

export default class Btn extends React.Component {

	render() {
		return (
			<div className="Btn">
				{this.props.children}
			</div>
		);
	}

}
