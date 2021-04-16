// next.config.js
const path = require('path');
const withImages = require('next-images');
module.exports = withImages({
	exclude: path.resolve(__dirname, 'public/icons'),
	webpack(config, options) {
		config.module.rules.push({
			test: /\.svg$/,
			include: path.resolve(__dirname, 'public/icons'),
			use: ["@svgr/webpack"]
		});

		return config;
	},
	env: {
		DB_EXPERTS: process.env.DB_EXPERTS,
		WP_SMS: 'https://wa.me/5491173622069?text=Hola,%20me%20interesa%20ser%20parte%20de%20Klouser',
		CONTACT_EMAIL: 'info@klouser.com',
	},
});