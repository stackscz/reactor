import React from 'react';
import _ from 'lodash';

export default class Btn extends React.Component {

	render() {
		var { className, children, ...other } = this.props;
		var newClassName = 'Btn ' + className;
		return (
			<button {...other} className={newClassName}>
				{children}
			</button>
		);
	}

}
