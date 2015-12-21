import React from 'react';
import ReactModal2 from 'react-modal2';
import ReactGateway from 'react-gateway';

export default class Modal extends React.Component {

	render() {
		const element = document.getElementById(this.props.on);
		if (element) {
			return (
				<ReactModal2
					onClose={this.props.onClose}
					closeOnEsc={this.props.closeOnEsc}
					closeOnBackdropClick={this.props.closeOnBackdropClick}
					backdropClassName='Modal'
					modalClassName='Modal-content'>
					{this.props.children}
				</ReactModal2>
			);
		}
		return null;
	}
}

Modal.propTypes = {
	onClose: React.PropTypes.func.isRequired,
	closeOnEsc: React.PropTypes.bool,
	closeOnBackdropClick: React.PropTypes.bool
};

Modal.defaultProps = {
	closeOnEsc: true,
	closeOnBackdropClick: true,
	onClose: ()=> {
	}
};
