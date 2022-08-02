/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			base: ["'Roboto Condensed'", 'sans-serif'],
			gv: ["'Gen Vision Font'", 'sans-serif']
		},
		colors: {
			bgStart: '#1C1C1C',
			bgEnd: '##262626',
			text: '#FFFFFF',
			primary: '#FDBA66',
			secondary: '#FF5C61'
		}
	},
	plugins: [],
	important: true
};
