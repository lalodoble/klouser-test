import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import classnames from 'classnames'

import * as Scroll from 'react-scroll';
import { Link as SLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Footer from '../components/Footer'

import Icon from '../components/Icon'
import Faqs from '../components/Faq'


import Expert, { GetExpert } from './api/expertgroup'
import listFormat, { frecuencyFormat, moneyFormat, floatFormat } from '../components/helpers/textFormat'
import Timer from '../components/Timer'
import Spinner from '../components/Spinner'

import { Magic } from "magic-sdk";
import { MAGIC_PUBLIC_KEY } from "../utils/urls";
import Header from '../components/Header'
import Heading from '../components/helpers/Headings'


export default function Home() {
	const router = useRouter();
	const [data, setData] = useState();
	const [expertAlias, setExpertAlias] = useState();
	const [theme, setTheme] = useState('blue');
	const [error, setError] = useState();

	useEffect(() => {
		// fetch data
		function callData() {
			let alias = router.query.expert ? router.query.expert[0] : '';
			if (alias) {
				setExpertAlias(alias);

				GetExpert(alias)
					.then(res => {
						if (res.status === 200) {
							setData(res.data);
							setTheme(res.data.color);
						} else {

						}
					})
					.catch(errors => {
						setError(errors.toString());
					})
			}
		}

		callData();
	}, [router.query])


	if (error) {
		return (
			<p className="text-red-500 text-center p-2">{error}</p>
		)
	}


	if (!data) {
		return <div className="m-4 text-center">
			<Spinner />
		</div>
	} else {

		let oldPrice = data.price.plan.price;
		let discount = data.price.coupon.discount_amount;

		switch (data.price.coupon.discount_type) {
			case 'fixed_amount':
				oldPrice = data.price.plan.price + discount;
				discount = '$' + discount;
				break;

			default: //percent
				oldPrice = data.price.plan.price * (data.price.coupon.discount_amount / 100 + 1);
				discount = discount + '%';
				break;
		}

		return (
			<>
				<Head>
					{Heading(data.expert.group_name, data.brief)}
				</Head>

				<Header />

				<main>
					{/* HERO COVER */}
					<section className="hero center-v" style={{ backgroundImage: 'url(' + data.cover_pic.url + ')' }}>
						<div className="container-fluid pb-8">

							<div className="col text-center">
								<h1><span>Klouser de</span> <strong>{data.group_name}</strong></h1>
							</div>
						</div>
						<ProfilePic src={data.profile_pic.url} />
					</section>

					{/* MAIN DESCRIPTION */}
					<section className="my-8">
						<div className="container-md text-center">
							<h2>Un espacio para {data.title}</h2>

							{listFormat(data.brief, 'p')}

							<SLink to="CTA" smooth={true}>
								<button className={classnames("btn btn-lg my-2", 'btn-theme-' + theme + '2')}>Quiero ser parte</button>
							</SLink>
						</div>
					</section>

					{/* SELLING POINTS */}
					<Element name="CTA">
						<section className="my-8 overflow-hidden">
							<div className="blurredBg" style={{ backgroundImage: 'url(' + data.cover_pic.url + ')' }}></div>

							<div className="container py-8">
								<div className="col-12 text-center mb-6">
									<h2 className="my-2">Sé parte del Klouser de {data.public_group_name}</h2>
									<h3 className={classnames("my-2 text-shadow-light", 'text-theme-' + theme + '2')}>{data.price.coupon.name.toUpperCase()} <strong>{discount} OFF</strong> por {data.price.plan.period} {frecuencyFormat(data.price.plan.period_unit, data.price.plan.period)}</h3>
								</div>

								<div className="flex justify-center">
									<div className="card mb-4">
										<div className="__half bg-white text-center flex flex-col justify-center">
											<div className="py-5">
												<h5 className="text-gray-400 font-medium text-lg m-0 line-through">${floatFormat(oldPrice)} {data.price.plan.currency_code}</h5>
												<h3 className="text-black font-light text-5xl my-3" style={{ letterSpacing: '-1px' }}>${floatFormat(data.price.plan.price)} {data.price.plan.currency_code} <span className="text-gray-400">/{frecuencyFormat(data.price.plan.period_unit)}</span></h3>
												<p className="m-0">
													durante
												{data.price.coupon.duration_month === 1 ? ' el primer ' : ' los primeros ' + data.price.coupon.duration_month + ' '}
													{frecuencyFormat('month', data.price.coupon.duration_month)}
												</p>
											</div>
											<a href="/login?ru=/payment" className={classnames("btn btn-lg mt-2 mb-6 w-full", 'btn-theme-' + theme)}>Suscribirme</a>
											<Timer until={data.price.coupon.valid_till} />
											<p className="text-xs text-gray-400 m-0">¡Cancelá cuando quieras! Probá Klouser por 7 días y si no <br />estás 100% satisfecho, te reembolsaremos tu dinero.</p>
										</div>
										<div className="__half flex-1">
											<h4 className={classnames("mb-6", 'text-theme-' + theme + '2')}>Accedé a beneficios exclusivos:</h4>
											<ul className="beneficiosList">
												{
													data.group_perks.map((perk, i) => {
														return <ListItem text={perk} theme={theme} key={i} i={i} />
													})
												}
											</ul>
										</div>
									</div>
								</div>
							</div>


						</section>
					</Element>

					{/* FAQ */}
					<section className="py-8 mb-8">
						<div className="container text-center">
							<h2>Preguntas frecuentes</h2>
						</div>
						<div className="container-sm">
							<Faqs />
						</div>
					</section>

					{/* FEATURES */}
					<section className="border-t border-b border py-6">
						<div className="container">
							<div className="row items-center justify-around">

								<div className="col-auto">
									<Feature
										key={1}
										theme={theme}
										glyph="big_ssl"
										title="SSL Pago seguro"
										text={["Tu información está protegida por el", <br key={1} />, " certificado SSL de 256 bits."]}
									/>
								</div>
								<div className="col-auto">
									<Feature
										key={2}
										theme={theme}
										glyph="big_refund"
										title="Devolución garantizada"
										text={["Si no estas satisfecho en los primeros ", <br key={1} />, "7 días, te reembolsamos tu dinero."]}
									/>
								</div>
								<div className="col-auto">
									<Feature
										key={3}
										theme={theme}
										glyph="big_exit"
										title="Cancelá cuando quieras"
										text={["Podés finalizar tu suscripción", <br key={1} />, " cuando lo desees."]}
									/>
								</div>
							</div>
						</div>
					</section>

					{/* CONTACT LINKS */}
					<section className="py-8">
						<div className="container-fluid">
							<div className="row justify-center gap-8">
								<div className="col-auto">
									<h2 className="m-0 mb-2">¿Tenés alguna consulta?</h2>
									<h4 className="m-0">Comunicate con nosotros</h4>
								</div>
								<div className="col-auto flex center-v gap-4">
									<a href={process.env.WP_SMS} target="_blank" className="btn btn-lg btn-theme-wp">Escribinos por WhatsApp</a>
									<a href={"mailto: " + process.env.CONTACT_EMAIL} target="_blank" className={classnames("btn btn-lg", 'btn-theme-' + theme)}>info@klouser.com</a>
								</div>
							</div>
						</div>
					</section>

				</main>

				<Footer />
			</>
		)
	}



}

export function ProfilePic(props) {
	return (
		<div className="profilePic">
			<img src={props.src}></img>
		</div>
	)
}

export function ListItem(props) {
	return (
		<li key={props.i}><Icon glyph={'check'} className={classnames("text-2xl absolute left-0", 'text-theme-' + props.theme + '2')} />{props.text}</li>
	)
}

export function Feature(props) {
	return (
		<div className="flex gap-3 py-1 center-v" >
			<Icon glyph={props.glyph} className={classnames("text-6xl", 'text-theme-' + props.theme)} />
			<div className="flex-1">
				<h5 className="text-md font-bold m-0 mb-1">{props.title}</h5>
				<p className="m-0 text-sm text-gray-500">{props.text}</p>
			</div>
		</div>
	)
}