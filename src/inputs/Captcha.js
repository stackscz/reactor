import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Formsy from 'formsy-react';
import reactMixin from 'react-mixin';

@reactMixin.decorate(Formsy.Mixin)
export default class Captcha extends React.Component {

	onChange(token) {
		this.setValue(token);
	}

	render() {
		return (
			<div className="Captcha">
				<ReCAPTCHA
					ref="recaptcha"
					sitekey={this.props.siteKey}
					onChange={this.onChange.bind(this)}
				/>
			</div>
		);
	}

}

Captcha.propTypes = {
	siteKey: React.PropTypes.string.isRequired
};
