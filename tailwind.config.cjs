/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			gv: ['"Gen Vision Font"', 'sans-serif']
		},
		colors: {
			bgStart: '#1C1C1C',
			bgEnd: '##262626',
			text: '#FFFFFF',
			primary: 'hsl(var(--primary-color-values))',
			secondary: 'hsl(var(--secondary-color-values))'
		}
	},
	plugins: []
};
