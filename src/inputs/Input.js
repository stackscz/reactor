import React from 'react';
import Formsy from 'formsy-react';
import reactMixin from 'react-mixin';

@reactMixin.decorate(Formsy.Mixin)
export default class Input extends React.Component {

	onChange(data) {
		//debugger; // eslint-disable-line no-debugger
		this.setValue(data.currentTarget.value);
	}

	render() {
		return (
			<div className="FormControl">
				<input {...this.props} onChange={this.onChange.bind(this)}/>
			</div>
		);
	}

}

//Input.propTypes = {
//	onChange: React.PropTypes.func.isRequired
//};
