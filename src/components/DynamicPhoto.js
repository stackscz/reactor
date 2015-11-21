var Dropzone = require('react-dropzone');

import React from 'react';

class DynamicPhoto extends React.Component {

	constructor() {
		super();
		this.handleFileSelected = this.handleFileSelected.bind(this);
		this.state = {
			files: []
		};
	}

	handleFileSelected(files) {
		//debugger;
		//this.props.onDelete(entity);
		this.setState({
			files
		});
	}

	getContent() {
		if(this.state.files[0]) {
			return <img src={this.state.files[0].preview}/>;
		} else {
			return <img src="http://placehold.it/300x300" />
		}
	}

	render() {
		return (
			<div>
				<Dropzone className="DynamicPhoto-dropZone" onDrop={this.handleFileSelected} multiple={false}>
					{this.getContent()}
				</Dropzone>
			</div>
		);
	}
}

module.exports = DynamicPhoto;
