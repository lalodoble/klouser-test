import React from 'react'
import classNames from 'classnames'

import Check from '../public/icons/check.svg';
import Phone from '../public/icons/phone.svg';
import Pin from '../public/icons/map-marker.svg';
import Email from '../public/icons/email.svg';
import AngleNext from '../public/icons/angle.svg';

import Big_exit from '../public/icons/ic-exit.svg';
import Big_ssl from '../public/icons/ic-ssl.svg';
import Big_refund from '../public/icons/ic-refund.svg';

import SocialFB from '../public/icons/social-facebook.svg';
import SocialWP from '../public/icons/social-whatsapp.svg';
import SocialIG from '../public/icons/social-instagram.svg';
import SocialTW from '../public/icons/social-twitter.svg';
import SocialLN from '../public/icons/social-linkedin.svg';


export default class Icon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			glyph: props.glyph || 'empty',
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.glyph !== prevProps.glyph) {
			this.setState({ glyph: this.props.glyph })
		}
	}

	render() {
		let mySvg = [];
		let newStyle = this.props.style || {};
		switch (this.state.glyph) {

			case 'angleNext':
				mySvg = <AngleNext />
				break;

			case 'anglePrev':
				mySvg = <AngleNext />
				newStyle.transform = 'rotate(180deg)';
				break;

			case 'angleUp':
				mySvg = <AngleNext />
				newStyle.transform = 'rotate(-90deg)';
				break;

			case 'angleDown':
				mySvg = <AngleNext />
				newStyle.transform = 'rotate(90deg)';
				break;

			case 'check':
				mySvg = <Check />
				break;

			case 'phone':
				mySvg = <Phone />
				break;

			case 'pin':
				mySvg = <Pin />
				break;

			case 'email':
				mySvg = <Email />
				break;



			case 'socialWP':
				mySvg = <SocialWP />
				break;

			case 'socialIG':
				mySvg = <SocialIG />
				break;

			case 'socialTW':
				mySvg = <SocialTW />
				break;

			case 'socialFB':
				mySvg = <SocialFB />
				break;

			case 'socialLN':
				mySvg = <SocialLN />
				break;


			case 'big_exit':
				mySvg = <Big_exit />
				break;

			case 'big_ssl':
				mySvg = <Big_ssl />
				break;

			case 'big_refund':
				mySvg = <Big_refund />
				break;


			case 'empty': default:
				mySvg = <></>
				break;
		}

		return (
			<i className={classNames('ic', 'ic-' + this.state.glyph, this.props.className)} style={newStyle}>
				{mySvg}
			</i>
		);
	}
}