<script lang="ts">
	import ShowcaseSection from '../components/ShowcaseSection.svelte';
	import MagnetSection from '../components/MagnetSection.svelte';
	import { onMount } from 'svelte';
	import { updateTotalPages } from '../stores/pageCursor';

	const GENVISION_ID = 'genvision';
	const NEWSWORTHY_ID = 'newsworthy';

	onMount(updateTotalPages);
</script>

<MagnetSection>
	<div class="flex flex-1 flex-col justify-center gap-32">
		<div class="flex flex-col justify-center">
			<h2 class="text-center text-4xl uppercase text-primary mb-2"><b>Active Projects</b></h2>
			<div class="flex justify-center gap-20">
				<a href={`#${GENVISION_ID}`}>
					<h3 class="text-center text-3xl">Genvision</h3>
				</a>
				<a href={`#${NEWSWORTHY_ID}`}>
					<h3 class="text-center text-3xl">Newsworthy</h3>
				</a>
			</div>
		</div>
		<div class="flex flex-col justify-center">
			<h2 class="text-center text-4xl uppercase text-primary mb-2"><b>Other Projects</b></h2>
			<div class="flex justify-center gap-20">
				<h3 class="text-center text-3xl">Cirullino Bot</h3>
				<h3 class="text-center text-3xl">Sagra del Pesto</h3>
			</div>
		</div>
	</div>
</MagnetSection>
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
	id={NEWSWORTHY_ID}
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
	id={NEWSWORTHY_ID}
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
