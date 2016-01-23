import React from 'react';
import Formsy from 'formsy-react';
import reactMixin from 'react-mixin';
import Input from './Input';

@reactMixin.decorate(Formsy.Mixin)
export default class Password extends React.Component {

	onChange(data) {
		this.setValue(data);
	}

	render() {
		return (
			<div className="FormControl">
				<Input {...this.props} />
			</div>
		);
	}

}

Password.propTypes = {
	type: React.PropTypes.string.isRequired,
	placeholder: React.PropTypes.string
};

Password.defaultProps = {
	type: 'password'
};
