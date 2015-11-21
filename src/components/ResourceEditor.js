import React from 'react';

import EntityList from './EntityList.js';
import EntityEditor from './EntityEditor.js';

var ResourceEditor = React.createClass({
	render: function () {
		return (
			<div className="resource-editor">
				<EntityList resourceName={this.props.resourceName}/>
				<EntityEditor resourceName={this.props.resourceName}/>
			</div>
		);
	}
});

module.exports = ResourceEditor;
