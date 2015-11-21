import React from 'react';
import connectToStores from 'alt/utils/connectToStores.js';
import _ from 'lodash';

import Subschema from 'subschema';
var Form = Subschema.Form;
var ValueManager = Subschema.ValueManager;

import AuthActions from '../actions/AuthActions.js';
import AuthStore from '../stores/AuthStore.js';

class LoginForm extends React.Component {

	constructor() {
		super();
		this.valueManager = ValueManager();
		this.formSchema = {
			username: {
				type: 'Text'
			},
			password: {
				type: 'Password'
			},
		}
	}

	static getStores() {
		return [AuthStore];//, ResourceFormStore];
	}

	static getPropsFromStores(props) {
		return AuthStore.getState();
	}

	//componentWillMount() {
	//	AuthActions.loadSchema(this.props.resourceName);
	//}

	handleSubmit(event, errors, entity, path) {
		AuthActions.login(this.valueManager.getValue());
	}

	render() {
		return (
			<div>
				<Form
					schema={this.formSchema}
					onSubmit={this.handleSubmit}
					valueManager={this.valueManager}
					>
					<button className="btn btn-primary">Save</button>
				</Form>
			</div>
		);
	}

}

module.exports = connectToStores(LoginForm);
