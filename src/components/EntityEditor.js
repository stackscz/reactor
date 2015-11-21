import React from 'react';
import connectToStores from 'alt/utils/connectToStores.js';
import _ from 'lodash';

import Subschema from 'subschema';
var Form = Subschema.Form;
var SubschemaLoader = Subschema.loader;
var ValueManager = Subschema.ValueManager;

import EntityActions from '../actions/EntityActions.js';
import EntityStore from '../stores/EntityStore.js';

import EntityEditorStore from '../stores/EntityEditorStore.js';

import FileInput from './../form-types/FileInput.js';
import DateTime from './../form-types/DateTime.js';
SubschemaLoader.addType('File', FileInput);
SubschemaLoader.addType('DateTime', DateTime);

class EntityEditor extends React.Component {
	static getStores() {
		return [EntityStore, EntityEditorStore];//, ResourceFormStore];
	}

	static getPropsFromStores(props) {
		EntityStore.state.resourceName = props.resourceName;
		return _.merge(EntityStore.getState(), EntityEditorStore.getState());
	}

	componentWillMount() {
		EntityActions.loadSchema(this.props.resourceName);
	}

	handleSubmit(event, errors, entity, path) {
		EntityActions.persistResource(this.props.valueManager.getValue());
	}

	render() {
		return (
			<div>
				{this.props.resourceSchema}
				<Form
					schema={this.props.resourceSchema}
					onSubmit={this.handleSubmit.bind(this)}
					valueManager={this.props.valueManager}
					>
					<button className="btn btn-primary">Save</button>
				</Form>
			</div>
		);
	}

}

module.exports = connectToStores(EntityEditor);
