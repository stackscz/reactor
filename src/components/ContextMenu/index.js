import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import hash from 'object-hash';

export default class ContextMenu extends Component {

	constructor() {
		super();
		this.state = {
			open: false,
			position: 'left'
		};
	}

	componentDidMount() {
		this.adjustMenuPosition();
	}

	adjustMenuPosition() {
		//check if context menu is crossing window edge and adjust class accordingly
		if (this.refs.menu) {
			var brect = this.refs.menu.getBoundingClientRect();
			if (brect.left + brect.width > window.innerWidth) {
				this.setState({position: 'right'});
			}
		}
	}

	getMenuClass() {
		return classNames({
			'ContextMenu-menu': true,
			[(this.state ? 'ContextMenu-menu--' + this.state.position : null)]: true
		});
	}

	openMenu(e) {
		this.cancelClosing();
		this.setState({open: true});
	};

	closeMenu(e) {
		this.setState({open: false});
	};

	getToggleClass() {
		return classNames({
			'ContextMenu-toggle': true,
			'focus': this.state.open
		});
	}

	startMenuClosing() {
		var cancelClosing = setTimeout(()=> {
			this.closeMenu();
		}, 100);
		this.setState({cancelClosing});
	}

	cancelClosing() {
		if (this.state.cancelClosing) {
			clearTimeout(this.state.cancelClosing);
			this.setState({cancelClosing: null});
		}
	}

	render() {
		return (
			<div className="ContextMenu" ref="component" onClick={e=>{e.preventDefault()}}>
				<a
					onClick={e => {e.preventDefault()}}
					onFocus={this.openMenu.bind(this)}
					onBlur={this.startMenuClosing.bind(this)}
					onMousedown={e=>{debugger; e.preventDefault();}}
					href="#"
					className={this.getToggleClass()} ref="toggle">
					<i className="fa fa-fw fa-ellipsis-h"></i>
				</a>
				<ul className={this.getMenuClass()} ref="menu">
					{
						this.props.items.map((item)=>{
							return (
							<li key={hash(item)}>
								{item.to &&
								<Link
									to={item.to ? item.to : '/'}
									className="ContextMenu-menuItem"
									onFocus={this.openMenu.bind(this)}
									onBlur={this.startMenuClosing.bind(this)}
									onClick={e=>{this.closeMenu();}}
								>
									{item.title}
								</Link>}
								{item.handler &&
								<a
									href="#"
									className="ContextMenu-menuItem"
									onFocus={this.openMenu.bind(this)}
									onBlur={this.startMenuClosing.bind(this)}
									onClick={e=>{this.closeMenu(); item.handler(e, this.props.subject);}}
								>
									{item.title}
								</a>}

							</li>
								);
							})
						}
					{this.props.children}
				</ul>
			</div>
		);
	}
}

ContextMenu.propTypes = {
	items: React.PropTypes.array.isRequired
};
