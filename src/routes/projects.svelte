<script lang="ts">
	import ShowcaseSection from '../components/ShowcaseSection.svelte';
	import MagnetSection from '../components/MagnetSection.svelte';
	import RecapSection from '../components/RecapSection.svelte';
	import { onMount } from 'svelte';
	import { updateTotalPages } from '../stores/pageCursor';
	import type { RecapItem } from '../types';

	const GENVISION_ID = 'genvision';
	const NEWSWORTHY_ID = 'newsworthy';
	const CROWNLABS_ID = 'crownlabs';
	const LIQO_ID = 'liqo';
	const CIRULLINO_ID = 'cirullino';
	const CNGEI_ID = 'cngei';

	const PROJECTS: RecapItem[] = [
		{
			title: 'Active Projects',
			subItems: [
				{
					name: 'Genvision',
					id: GENVISION_ID
				},
				{
					name: 'Newsworthy',
					id: NEWSWORTHY_ID
				}
			]
		},
		{
			title: 'Open source Projects',
			subItems: [
				{
					name: 'Crownlabs',
					id: CROWNLABS_ID
				},
				{
					name: 'Liqo',
					id: LIQO_ID
				}
			]
		},
		{
			title: 'Other Projects',
			subItems: [
				{
					name: 'Cirullino Bot',
					id: CIRULLINO_ID
				},
				{
					name: 'Sagra del Pesto',
					id: CNGEI_ID
				}
			]
		}
	];

	onMount(updateTotalPages);
</script>

<RecapSection items={PROJECTS} />
<ShowcaseSection
	id={GENVISION_ID}
	title="Genvision"
	text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti provident, qui officiis dolorem vitae libero dicta delectus reiciendis ipsa quas.'}
>
	<div class="sm:flex-1 uppercase text-center font-gv text-5xl leading-tight">
		<a href="https://gvnetwork.it/genvision" target="_blank">
			<h3>XX22</h3>
			<h1>GENVISION</h1>
		</a>
	</div>
</ShowcaseSection>
<ShowcaseSection
	id={NEWSWORTHY_ID}
	title="Newsworthy"
	text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti provident, qui officiis dolorem vitae libero dicta delectus reiciendis ipsa quas.'}
>
	<div class="sm:flex-1 uppercase text-center font-gv text-5xl leading-tight flex justify-center">
		<a href="https://gvnetwork.it/genvision" target="_blank">
			<img src="/worthyno.webp" alt="Newsworthy logo" class="max-w-[200px] w-full" />
		</a>
	</div>
</ShowcaseSection>
<ShowcaseSection
	id={LIQO_ID}
	title="Liqo"
	text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti provident, qui officiis dolorem vitae libero dicta delectus reiciendis ipsa quas.'}
>
	<div class="sm:flex-1 uppercase text-center font-gv text-5xl leading-tight flex justify-center">
		<a href="https://liqo.io/" target="_blank">
			<img src="/liqo.svg" alt="Liqo logo" class="max-w-[300px] w-full" />
		</a>
	</div>
</ShowcaseSection>
<ShowcaseSection
	id={CROWNLABS_ID}
	title="Sagra del Pesto"
	text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti provident, qui officiis dolorem vitae libero dicta delectus reiciendis ipsa quas.'}
>
	<div class="sm:flex-1 uppercase text-center font-gv text-5xl leading-tight flex justify-center">
		<a href="https://crownlabs.polito.it/#" target="_blank">
			<img src="/crownlabs.svg" alt="Crownlabs logo" class="max-w-[250px] w-full" />
		</a>
	</div>
</ShowcaseSection>
<ShowcaseSection
	id={CIRULLINO_ID}
	title="Cirullino Bot"
	text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti provident, qui officiis dolorem vitae libero dicta delectus reiciendis ipsa quas.'}
>
	<div class="sm:flex-1 uppercase text-center font-gv text-5xl leading-tight flex justify-center">
		<a href="https://gvnetwork.it/genvision" target="_blank">
			<img
				src="/cirullinoBotLogo.webp"
				alt="Cirullino bot logo"
				class="max-w-[200px] w-full rounded-[50%]"
			/>
		</a>
	</div>
</ShowcaseSection>
<ShowcaseSection
	id={CNGEI_ID}
	title="Sagra del Pesto"
	text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti provident, qui officiis dolorem vitae libero dicta delectus reiciendis ipsa quas.'}
>
	<div class="sm:flex-1 uppercase text-center font-gv text-5xl leading-tight flex justify-center">
		<a href="https://gvnetwork.it/genvision" target="_blank">
			<img
				src="https://cngei.it/wp-content/themes/cngei/images/logo.svg"
				alt="CNGEI logo"
				class="max-w-[200px] w-full"
			/>
		</a>
	</div>
</ShowcaseSection>
