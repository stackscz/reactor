import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import BlissComponent from 'components/BlissComponent';

export default class Btn extends React.Component {

	render() {
		const {children, href, ...other} = this.props;
		var btnTag = 'button';
		if (href) {
			btnTag = 'a';
		}

		var newChildren = children;
		if (!_.isArray(newChildren)) {
			newChildren = [children];
		}
		if (this.props.icon) {
			newChildren.unshift(<i key="icon-before" className={'fa fa-fw fa-' + this.props.icon}/>);
		}

		return this.props.to ?
			(<BlissComponent tag={Link} name="Btn" {...other} onlyActiveOnIndex={true}
							 activeClassName="isActive">{newChildren}</BlissComponent>)
			:
			(<BlissComponent tag={btnTag} name="Btn" {...other} href={href} >{newChildren}</BlissComponent>);
	}


}

Btn.propTypes = {
	modifiers: React.PropTypes.string
};
