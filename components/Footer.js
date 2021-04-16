import Icon from "./Icon";

import logo from '../public/logo-klouser.svg'

export default function Footer() {
	return (
		<footer className="bg-gray-100 z-50 relative">
			<div className="container-fluid py-6">
				<div className="row">

					<div className="col">
						<div className="flex center-v gap-3 text-base text-gray-500">
							<a href="https://klouser.com" className="logo">
								<img src={logo} alt="" />
							</a>
							<ul className="border-l ml-4 pl-4 border-gray-300">
								<FooterData glyph='pin' text='Lavalleja 305, Buenos Aires, Argentina' />
								<FooterData glyph='email' text='info@klouser.com' />
								<FooterData glyph='phone' text='(+54) 11 7362 2069' />
							</ul>
						</div>
					</div>
					<div className="col-auto center-v">
						<div className="grid gap-2 grid-flow-col">
							<SocialIcon social="WP" link={process.env.WP_SMS} />
							<SocialIcon social="IG" link="https://www.instagram.com/klouser.app/" />
							<SocialIcon social="TW" link="https://twitter.com/klouser_app" />
							<SocialIcon social="LN" link="https://www.linkedin.com/company/klousergroup/" />
						</div>
					</div>
				</div>
			</div>

			<div className="bg-gray-300 py-3">
				<div className="container-fluid">
					<p className="text-xs block text-center text-gray-500 m-0">Copyright Klouser © 2021. All rights reserved.</p>
					<p className="text-xs block text-center text-gray-500 m-0">Website by <a href="https://lalogold.com" target="_blank" className="font-medium hover:underline">LaloGold</a></p>
				</div>
			</div>
		</footer>
	)
}


export function FooterData(props) {
	return (
		<li className="center-v text-base text-gray-400 my-1" ><Icon glyph={props.glyph} className="mr-2 text-lg" /> {props.text}</li>
	)
}

export function SocialIcon(props) {
	return (
		<a href={props.link} target="_blank" className="p-2 w-10 h-10 justify-center center-v rounded-full bg-gray-300 hover:bg-brand transition-all"><Icon glyph={"social" + props.social} className="text-white text-xl" /></a>
	)
}