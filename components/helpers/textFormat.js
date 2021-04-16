export default function listFormat(text, outputObject = 'p', className = '') {
	if (text) {

		let array = text.indexOf('\n\n') > 0 ? text.split('\n\n') : [text];
		let res = [];

		array.map((val, i) => {
			switch (outputObject) {
				case 'li':
					res.push(<li key={i} className={className} >{val}</li>);
					break;

				case 'array':
					res.push(val);
					break;

				case 'P': default:
					res.push(<p key={i} className={className} >{val}</p>);
					break;
			}
		})

		return res.filter(val => val != null);
	} else {
		return []
	}
}

export function moneyFormat(x = 0, showCents = true) {
	if (!x) {
		x = 0;
	}
	if (showCents) {
		x = parseFloat(x).toFixed(2).toString().replace('.', ',');
	} else {
		x = parseInt(x).toString().replace('.', ',');
	}
	return '$ ' + x.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function floatFormat(x, decimals = 2) {
	x = !x ? 0 : x;
	return (x % 1 === 0 ? x : x.toFixed(decimals));
}

export function frecuencyFormat(x, n = 1) {
	let res = '';
	if (n === 1) {
		switch (x) {
			case 'year':
				res = 'año';
				break;

			case 'month':
				res = 'mes';
				break;

			case 'day':
				res = 'dia';
				break;
		}
	} else {
		switch (x) {
			case 'year':
				res = 'años';
				break;

			case 'month':
				res = 'meses';
				break;

			case 'day':
				res = 'dias';
				break;
		}
	}

	return res;
}