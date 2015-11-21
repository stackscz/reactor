import React from 'react';

var Entity = React.createClass({
	handleDeleteButtonClick: function (entity) {
		this.props.onDelete(entity);
	},
	render: function () {
		var entity = this.props.data;
		return (
			<tr className="resource">
				<td>
					{entity.title}
				</td>
				<td>
					<button
						className="btn btn-danger"
						onClick={this.handleDeleteButtonClick.bind(this, entity)}
						>&times;</button>
				</td>
			</tr>
		);
	}
});

module.exports = Entity;
