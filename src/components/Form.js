import _ from 'lodash';
import React, { Component } from 'react';
//import forms from 'newforms';
import Formsy from 'formsy-react';
import FMUI from 'formsy-react-components';
import Btn from 'components/Btn';

export default class Form extends Component {
	constructor(props) {
		super(props);
		//this.errors = {};
		//this.form = {};
		//_.each(props.schema, (field)=> {
		//	this.form[field.name] = forms[field.type](field.options);
		//});
		this.state = {
			//form: forms.Form.extend(this.form),
			data: _.cloneDeep(props.values)
		};
	}

	_forceUpdate() {

	}

	componentDidMount() {
		//var formData = _.cloneDeep(this.state.data);
		//formData = _.pick(formData, (value, key) => (!!this.form[key]));
		//debugger; // eslint-disable-line no-debugger
		//this.refs.form.getForm().setData(formData);
	}

	_handleSubmit(model) {
		var newData = _.assign({}, this.state.data, model);
		this.setState({data: newData});
		this.props.onSubmit(newData);
	}

	_enableButton() {
		this.setState({canSubmit: true});
	}

	_disableButton() {
		this.setState({canSubmit: false});
	}

	render() {

		var children = [];
		_.each(this.props.schema, (field) => {
			const {component, name, ...other} = field;
			const fieldComponent = FMUI[component];
			const others = {...other};
			others.key = name;
			others.name = name;
			if (this.state.data) {
				others.value = this.state.data[name];
			}
			//debugger; // eslint-disable-line no-debugger
			children.push(
				React.createElement(fieldComponent, others)
			);
		});

		//debugger; // eslint-disable-line no-debugger

		return (
			<Formsy.Form
				onSubmit={this._handleSubmit.bind(this)}
				onValid={this._enableButton.bind(this)}
				onInvalid={this._disableButton.bind(this)}
				className="Form">
				{children}
				{
					this.props.children ? this.props.children :
						<Btn disabled={!this.state.canSubmit}>{this.props.submitButtonTitle || 'Submit'}</Btn>
				}
			</Formsy.Form>
		);
	}
}

Form.defaultProps = {
	values: null
};

Form.propTypes = {
	//form: React.PropTypes.object.isRequired,
	values: React.PropTypes.any,
	onSubmit: React.PropTypes.func.isRequired
};


//<form onSubmit={}>
//	<forms.RenderForm form={this.state.form} ref="form" data={this.props.values}/>
//
//</form>
