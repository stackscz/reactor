import React from 'react';

export default class Select extends React.Component {
	static _renderOption(data) {
		return (
			<option value={data.value}>{data.label}</option>
		);
	}

	_generateOptions() {
		this.props.options = this.props.options || [];
		return this.props.options.map(this._renderOption, this);
	}

	render() {
		return (
			<select onChange={this.props.onChange} className="form-control" value={this.props.value}>
				{this._generateOptions()}
			</select>
		);
	}

}
