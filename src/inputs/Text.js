import React from 'react';
import Formsy from 'formsy-react';
import reactMixin from 'react-mixin';
import Input from './Input';

@reactMixin.decorate(Formsy.Mixin)
export default class Text extends React.Component {

	onChange(data) {
		this.setValue(data.target.value);
	}

	render() {
		return (
			<div className="FormControl">
				<Input {...this.props} onChange={this.onChange.bind(this)} />
			</div>
		);
	}

}

Text.propTypes = {
	type: React.PropTypes.string.isRequired,
	placeholder: React.PropTypes.string
};

Text.defaultProps = {
	type: 'text'
};
