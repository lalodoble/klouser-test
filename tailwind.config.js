const colors = require('tailwindcss/colors');

module.exports = {
	important: true,
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	corePlugins: {
		container: false,
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
	},
	theme: {
		boxShadow: {
			sm: '0 1px 2px 0 rgba(69, 47, 175, 0.05)',
			DEFAULT: '0 1px 3px 0 rgba(69, 47, 175, 0.1), 0 1px 2px 0 rgba(69, 47, 175, 0.06)',
			md: '0 4px 9px -1px rgba(69, 47, 175, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0 10px 15px -3px rgba(69, 47, 175, 0.1), 0 4px 6px -2px rgba(69, 47, 175, 0.05)',
			xl: '0 20px 25px -5px rgba(69, 47, 175, 0.1), 0 10px 10px -5px rgba(69, 47, 175, 0.04)',
			'2xl': '0 25px 50px -12px rgba(69, 47, 175, 0.25)',
			'3xl': '0 35px 60px -15px rgba(69, 47, 175, 0.3)',
			inner: 'inset 0 2px 4px 0 rgba(69, 47, 175, 0.06)',
			none: 'none',
		},
		fontSize: {
			'xs': ['.75rem', '1.2rem'],
			'sm': ['.875rem', '1.35rem'],
			'base': ['.9rem', '1.5rem'],
			'md': ['1rem', '1.7rem'],
			'lg': ['1.125rem', '1.2em'],
			'xl': ['1.25rem', '1.4rem'],
			'2xl': ['1.5rem', '1.2em'],
			'3xl': ['1.7rem', '1.2em'],
			'4xl': ['2rem', '1.2em'],
			'5xl': ['2.7rem', '1em'],
			'6xl': ['4rem', '1em'],
			'7xl': ['5rem', '1em'],
		},
		extend: {
			colors: {
				brand: '#BB85FF',
				'brand-strong': '#9f52ff',
				main: {
					'50': '#f5f8fc',
					'100': '#eaf0fc',
					'200': '#d2d8fa',
					'300': '#b8bcf9',
					'400': '#9990f9',
					'500': '#725fcc',
					'600': '#9852e4',
					'700': '#4734e0',
					'800': '#372bb5',
					'900': '#2d248f',
				},
				gray: colors.coolGray,
				red: colors.red,
				blue: colors.lightBlue,
				yellow: colors.amber,
			},
			spacing: {
				'n1': '-.5rem',
				'n2': '-1rem',
				'0': '0',
				'1': '.25rem',
				'2': '.5rem',
				'3': '1rem',
				'4': '1.5rem',
				'5': '2rem',
				'6': '2.5rem',
				'7': '3rem',
				'8': '3.5rem',
				'9': '4rem',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}

