import React from 'react';

export default class LanguageSelector extends React.Component {

	render() {
		return (
			<ul className="LanguageSelector">
				{this.props.languages.map((l, key)=> {
					var flagClass = this.props.flagClass + l.flag;
					return (
						<li key={key} className="LanguageSelector-flagWrapper">
							<a href="" className="LanguageSelector-link">
								<span className={flagClass}></span>
							</a>
						</li>
					);
				})}
			</ul>
		);
	}

}

LanguageSelector.defaultProps = {
	flagClass: 'LanguageSelector-flag flag-icon flag-icon-'
};
