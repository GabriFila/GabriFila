/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			bgStart: '#1C1C1C',
			bgEnd: '##262626',
			text: '#FFFFFF',
			primary: 'var(--primary-color)',
			secondary: 'var(--secondary-color)'
		}
	},
	plugins: []
};
