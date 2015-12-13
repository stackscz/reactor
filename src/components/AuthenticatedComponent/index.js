import React from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';

export function requireAuthentication(Component) {

	class AuthenticatedComponent extends React.Component {

		componentWillMount() {
			this.checkAuth();
		}

		componentWillReceiveProps() {
			this.checkAuth();
		}

		checkAuth() {
			if (!this.props.user) {
				const redirectAfterLogin = this.props.location.pathname;
				this.props.dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
			}
		}

		render() {
			return this.props.user
				? (<Component {...this.props}/>)
				: null;
		}
	}

	const mapStateToProps = (state) => {
		return {
			user: state.auth.user
		};
	};

	return connect(mapStateToProps)(AuthenticatedComponent);

}
