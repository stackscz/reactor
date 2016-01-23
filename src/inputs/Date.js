import React from 'react';
import Formsy from 'formsy-react';
import reactMixin from 'react-mixin';
import 'react-date-picker/index.css';
import DatePicker from 'react-date-picker';
import moment from 'moment';

@reactMixin.decorate(Formsy.Mixin)
export default class Date extends React.Component {

	onChange(data) {
		var val = moment(data);
		this.setValue(val);
		this.props.onChange && this.props.onChange(val);
	}

	render() {
		return (
			<div className="FormControl">
				<DatePicker onChange={this.onChange.bind(this)}/>
			</div>
		);
	}

}

Date.propTypes = {
	onChange: React.PropTypes.func
};
