import _ from 'lodash';
import React from 'react';
import Select from '../Select.js';

export default class Pagination extends React.Component {

	handlePageSelect(offset, limit, event) {
		if (event.target.dataset.disabled !== 'true') {
			this.props.onPageSelect(offset, limit);
		}
	}

	handleSetPageSize(event) {
		var newLimit = parseInt(event.target.value, 10);
		this.props.onPageSelect(Math.floor(this.props.offset / newLimit), newLimit);
	}

	_getPagesCount() {
		return Math.ceil(this.props.count / this.props.limit);
	}

	_getPageNumber() {
		return Math.floor(this.props.offset / this.props.limit) + 1;
	}

	_getPages() {
		return _.range(1, this._getPagesCount() + 1);
	}

	_renderPageLink(index) {
		return (
			<li key={index} className={index == this._getPageNumber()?'active':''}>
				<a
					key={index}
					onClick={this.handlePageSelect.bind(this, (index - 1) * this.props.limit, this.props.limit)}
					data-disabled={index == this._getPageNumber()}
				>{index}</a>
			</li>
		);
	}

	_renderPagination() {
		var prevOffset = this.props.offset - this.props.limit;
		if (prevOffset < 0) {
			prevOffset = false;
		}

		var nextOffset = this.props.offset + this.props.limit;
		if (nextOffset > this.props.count) {
			nextOffset = false;
		}

		var firstOffset = 0;
		var lastOffset = Math.floor(this.props.count / this.props.limit) * this.props.limit;

		return (
			<div>
				<div>
					Page {this._getPageNumber()} of {this._getPagesCount()}
				</div>
				<ul className="pagination">
					<li className={prevOffset === false?'disabled':''}>
						<a
							onClick={this.handlePageSelect.bind(this, firstOffset, this.props.limit)}
							data-disabled={prevOffset === false}
						>
							<i className="fa fa-angle-double-left"></i>
						</a>
					</li>
					<li className={prevOffset === false?'disabled':''}>
						<a
							onClick={this.handlePageSelect.bind(this, prevOffset, this.props.limit)}
							data-disabled={prevOffset === false}
						>
							<i className="fa fa-angle-left"></i>
						</a>
					</li>
					{this._getPages().map(this._renderPageLink)}
					<li className={nextOffset === false?'disabled':''}>
						<a
							onClick={this.handlePageSelect.bind(this, nextOffset, this.props.limit)}
							data-disabled={nextOffset === false}
						>
							<i className="fa fa-angle-right"></i>
						</a>
					</li>
					<li className={nextOffset === false?'disabled':''}>
						<a
							onClick={this.handlePageSelect.bind(this, lastOffset, this.props.limit)}
							data-disabled={nextOffset === false}
						>
							<i className="fa fa-angle-double-right"></i>
						</a>
					</li>
				</ul>

			</div>
		);
	}

	render() {
		return (
			<nav className="list-paging">
				{
					this._getPagesCount() > 1
						?
						this._renderPagination()
						:
						null
				}
				{
					this.props.limitChoices && this.props.limitChoices.length > 1
						?
						<Select
							value={this.props.limit}
							options={this.props.limitChoices}
							onChange={this.handleSetPageSize}
						/>
						:
						null
				}
			</nav>
		);
	}
}

Pagination.propTypes = {
	offset: React.PropTypes.number,
	limit: React.PropTypes.number,
	count: React.PropTypes.number,
	onPageSelect: React.PropTypes.func.isRequired
};

Pagination.defaultProps = {
	onPageSelect: function () {
		throw new Error('Set onPageSelect handler on Pagination component.');
	}
};
