import React from 'react';
import { Link } from 'react-router';
import BlissComponent from 'components/BlissComponent';

export default class Btn extends React.Component {

	render() {
		const {children, ...other} = this.props;

		return this.props.to ?
			(<BlissComponent tag={Link} name="Btn" {...other} onlyActiveOnIndex={true} activeClassName="isActive">{children}</BlissComponent>)
			:
			(<BlissComponent tag="a" name="Btn" {...other} >{children}</BlissComponent>);
	}


}

Btn.propTypes = {
	modifiers: React.PropTypes.string
};
