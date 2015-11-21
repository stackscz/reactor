import _ from 'lodash';

import React from 'react';
import connectToStores from 'alt/utils/connectToStores.js';
import JsonTable from 'react-json-table';

import EntityStore from '../stores/EntityStore.js';
import EntityActions from '../actions/EntityActions.js';

import EntityListStore from '../stores/EntityListStore.js';
import EntityListActions from '../actions/EntityListActions.js';

import Entity from './Entity.js';
import Pagination from './Pagination.js';

class EntityList extends React.Component {
	static getStores() {
		return [EntityStore, EntityListStore];
	}

	static getPropsFromStores(props) {
		EntityStore.state.resourceName = props.resourceName;
		var data = _.merge(EntityStore.getState(), EntityListStore.getState());
		return data;
	}

	componentWillMount() {
		EntityListActions.loadIndex(this.props.offset, this.props.limit);
	}

	handleLoadPage(offset, limit) {
		EntityListActions.loadIndex(offset, limit);
	}

	handleDeleteItem(item, event) {
		event.preventDefault();
		EntityActions.deleteResource(item);
	}

	handleEditItem(item, event) {
		event.preventDefault();
		EntityActions.editResource(item);
	}

	transformSchemaToColumns(schema) {
		var columns = [];
		_.forEach(schema, function (value, key) {
			var column = _.clone(value);
			column.key = key;
			columns.push(column);
		});

		columns.push({
			key: 'actions',
			cell: (item, columnKey) => {
				return (
					<span>
						<a href="#" onClick={this.handleEditItem.bind(this, item)}><i className="fa fa-pencil"></i></a>
						<a href="#" onClick={this.handleDeleteItem.bind(this, item)}><i className="fa fa-trash"></i></a>
					</span>
				);
			}
		});

		return columns;
	}

	render() {
		//var resourceNodes = this.props.data.map((item) => {
		//	return (
		//		<Entity key={item.id} data={item} onDelete={this.props.onResourceDelete}></Entity>
		//	);
		//});
		var columns = this.transformSchemaToColumns(this.props.resourceSchema);
		return (
			<div className="resource-list">
				{this.props.loading ? <span>LOADING...</span> : ''}
				<JsonTable
					settings={{classPrefix: 'table table-bordered table-condensed table-striped '}}
					rows={this.props.data}
					columns={columns}
					/>
				<Pagination
					offset={this.props.offset}
					limit={this.props.limit}
					limitChoices={this.props.limitChoices}
					count={this.props.total}
					onPageSelect={this.handleLoadPage}/>
			</div>
		);
	}
}

module.exports = connectToStores(EntityList);
