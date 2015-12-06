import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { Link } from 'react-router';

export default class Btn extends React.Component {

	render() {
		var { className, children, modifiers, ...other } = this.props;
		var classes = {
			'Btn': true
		};
		if (className) {
			classes[className] = true;
		} else {
			_.each(modifiers.split(/\s/i), (mod) => {
				if (mod) {
					classes['Btn--' + mod] = true;
				}
			});
		}
		var newClassName = classNames(classes);


		return this.props.to ?
			(<Link {...other} className={newClassName} onlyActiveOnIndex={true} activeClassName="isActive">{children}</Link>)
			:
			(<a {...other} className={newClassName}>{children}</a>);
	}


}

Btn.propTypes = {
	modifiers: React.PropTypes.string
};

Btn.defaultProps = {
	tagName: 'Link',
	modifiers: ''
};
