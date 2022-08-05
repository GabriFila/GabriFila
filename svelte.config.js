import adapter from '@sveltejs/adapter-static';
import { resolve } from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({ postcss: true }),
	kit: {
		adapter: adapter(),
		prerender: { default: true },
		vite: {
			resolve: {
				alias: {
					src: resolve('./src')
				}
			}
		}
	}
};

export default config;
