import React, { useEffect, useState } from 'react';
import classnames from 'classnames'

export default function Timer(props) {
	const [expires, setExpires] = useState(parseInt(props.until));
	const [count, setCount] = useState(0);
	const [DD, setDD] = useState(0);
	const [HH, setHH] = useState(0);
	const [MM, setMM] = useState(0);
	const [SS, setSS] = useState(0);
	const [tiking, setTiking] = useState(false);
	const [tikingDD, setTikingDD] = useState(false);
	const [tikingHH, setTikingHH] = useState(false);
	const [tikingMM, setTikingMM] = useState(false);

	useEffect(() => {
		let now = new Date().getTime();
		let dif = parseInt(expires) - parseInt(now);
		var delta = Math.abs(dif) / 1000;
		if (delta > 0) {
			setCount(delta.toFixed(0));
		} else {
			setCount(0);
		}
	}, [expires])


	useEffect(() => {
		function tick() {
			let delta = count;

			// calculate (and subtract) whole days
			let days = Math.floor(delta / 86400);
			delta -= days * 86400;

			// calculate (and subtract) whole hours
			let hours = Math.floor(delta / 3600) % 24;
			delta -= hours * 3600;

			// calculate (and subtract) whole minutes
			let minutes = Math.floor(delta / 60) % 60;
			delta -= minutes * 60;

			// what's left is seconds
			let seconds = delta % 60;  // in theory the modulus is not required

			setSS(seconds);
			if (seconds === 59 || (!MM && !HH && !DD && seconds > 0)) {
				setDD(days);
				setHH(hours);
				setMM(minutes);
			}
		}

		var wait = setInterval(() => {
			if (count > 0) {
				setCount(count - 1);
				tick();
			}
			clearInterval(wait);
		}, 1000);

		if (!MM && !HH && !DD && !SS) {
			tick();
		}

	}, [count]);

	useEffect(() => {
		setTikingDD(true);
		setTimeout(() => {
			setTikingDD(false);
		}, 700);
	}, [DD])

	useEffect(() => {
		setTikingHH(true);
		setTimeout(() => {
			setTikingHH(false);
		}, 700);
	}, [HH])

	useEffect(() => {
		setTikingMM(true);
		setTimeout(() => {
			setTikingMM(false);
		}, 700);
	}, [MM])

	useEffect(() => {
		setTiking(true);
		setTimeout(() => {
			setTiking(false);
		}, 700);
		// console.log('Animate SS ' + SS);
	}, [SS])

	let prevDD = DD + 1;
	let prevHH = HH + 1;
	let prevMM = MM + 1;
	let prevSS = SS + 1;
	if (prevSS == 60) prevSS = 0;
	if (prevMM == 60) prevMM = 0;
	if (prevHH == 24) prevMM = 0;

	return (
		<div className="timer mb-5 mt-n2">
			<p className="text-base my-2 text-gray-800">Expira en</p>
			<ul className="__time">
				<li>
					<span className="__number --anim">
						<span className={classnames(tikingDD ? 'toExit' : 'toStayFake')}>{tikingDD ? prevDD : DD}</span>
						<span className={classnames(tikingDD ? 'toStay' : 'toEnter')}>{DD}</span>
					</span>
					<span className="__text">días</span>
				</li>
				<li>
					<span className="__number --anim">
						<span className={classnames(tikingHH ? 'toExit' : 'toStayFake')}>{tikingHH ? prevHH : HH}</span>
						<span className={classnames(tikingHH ? 'toStay' : 'toEnter')}>{HH}</span>
					</span>
					<span className="__text text-xs text-gray-400">horas</span>
				</li>
				<li>
					<span className="__number --anim">
						<span className={classnames(tikingMM ? 'toExit' : 'toStayFake')}>{tikingMM ? prevMM : MM}</span>
						<span className={classnames(tikingMM ? 'toStay' : 'toEnter')}>{MM}</span>
					</span>
					<span className="__text text-xs text-gray-400">min</span>
				</li>
				<li>
					<span className="__number --anim">
						<span className={classnames(tiking ? 'toExit' : 'toStayFake')}>{tiking ? prevSS : SS}</span>
						<span className={classnames(tiking ? 'toStay' : 'toEnter')}>{SS}</span>
					</span>
					<span className="__text text-xs text-gray-400">seg</span>
				</li>
			</ul>
		</div>
	)
}