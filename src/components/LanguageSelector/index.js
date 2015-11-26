import React from 'react';
import _ from 'lodash';

export default class LanguageSelector extends React.Component {

	render() {
		return (
			<ul className="LanguageSelector">
				{this.props.languages.map((l, key)=> {
					var flagClass = this.props.flagClass + l.flag;
					return (
						<li key={key}>
							<span className={flagClass}></span>{l.name}
						</li>
					);
				})}
			</ul>
		);
	}

}

LanguageSelector.defaultProps = {
	flagClass: 'flag-icon flag-icon-'
};
