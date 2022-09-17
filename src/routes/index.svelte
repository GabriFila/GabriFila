<script lang="ts">
	import { onMount } from 'svelte';
	import { updateTotalPages } from '../stores/pageCursor';

	import ShowcaseSection from '../components/ShowcaseSection.svelte';
	import MagnetSection from '../components/MagnetSection.svelte';
	import RecapSection from '../components/RecapSection.svelte';
	import type { RecapItem } from '../types';
	import { component_subscribe } from 'svelte/internal';

	const PROJECTS_ID = 'projects';
	const GENVISION_ID = 'genvision';
	const MLAT_ID = 'mlat';
	const NEWSWORTHY_ID = 'newsworthy';
	const CROWNLABS_ID = 'crownlabs';
	const LIQO_ID = 'liqo';
	const CIRULLINO_ID = 'cirullino';
	const CNGEI_ID = 'cngei';

	const PROJECT_IMAGES: { [projectId: string]: string } = {
		[MLAT_ID]: '/mlatLogo.webp',
		[GENVISION_ID]: '/gvLogo.webp',
		[NEWSWORTHY_ID]: '/worthyno.webp',
		[CROWNLABS_ID]: '/crownlabs.svg',
		[LIQO_ID]: '/liqo.svg',
		[CIRULLINO_ID]: '/cirullinoBotLogo.webp',
		[CNGEI_ID]: 'https://cngei.it/wp-content/themes/cngei/images/logo.svg'
	};

	const PROJECT_LINKS: { [projectId: string]: string } = {
		[GENVISION_ID]: 'https://gvnetwork.it/genvision',
		[MLAT_ID]: 'https://milegoalterritorio.it',
		[NEWSWORTHY_ID]: 'https://news-worthy.netlify.app',
		[CROWNLABS_ID]: 'https://crownlabs.polito.it/',
		[LIQO_ID]: 'https://liqo.io/',
		[CIRULLINO_ID]: 'https://github.com/GabriFila/cirullino_js',
		[CNGEI_ID]: 'https://github.com/GabriFila/app-sagra-pesto'
	};

	const PROJECTS: RecapItem[] = [
		{
			title: 'Genvision',
			id: GENVISION_ID,
			imgSrc: PROJECT_IMAGES[GENVISION_ID],
			tags: ['usedInProduction']
		},
		{
			title: 'Mi Lego Al Territorio',
			id: MLAT_ID,
			imgSrc: PROJECT_IMAGES[MLAT_ID],
			tags: ['usedInProduction']
		},
		{
			title: 'Newsworthy',
			id: NEWSWORTHY_ID,
			imgSrc: PROJECT_IMAGES[NEWSWORTHY_ID],
			tags: ['innovative']
		},
		{
			title: 'Liqo',
			id: LIQO_ID,
			imgSrc: PROJECT_IMAGES[LIQO_ID],
			tags: ['openSource', 'usedInProduction']
		},
		{
			title: 'Crownlabs',
			id: CROWNLABS_ID,
			imgSrc: PROJECT_IMAGES[CROWNLABS_ID],
			tags: ['openSource', 'usedInProduction']
		},
		{
			title: 'Cirullino Bot',
			id: CIRULLINO_ID,
			imgSrc: PROJECT_IMAGES[CIRULLINO_ID],
			tags: ['wip']
		},
		{
			title: 'Sagra del Pesto',
			id: CNGEI_ID,
			imgSrc: PROJECT_IMAGES[CNGEI_ID],
			tags: ['wip']
		}
	];

	onMount(updateTotalPages);
</script>

<div class="page-card">
	<div class=" flex flex-col h-full justify-center items-center gap-10">
		<div
			class=" flex flex-col sm:flex-row-reverse sm:h-full justify-center items-center gap-5 sm:gap-24 px-[5%]"
		>
			<div class="sm:flex-1 flex justify-center items-center sm:items-start">
				<div class="max-w-[20vh] max-h-[20vh] sm:max-h-fit sm:max-w-sm">
					<img class="rounded-[50%] h-full w-full" src="/me.webp" alt="Gabri's profile pic" />
				</div>
			</div>
			<p class="text-center sm:text-left text-text text-xl sm:text-2xl sm:flex-1 max-w-3xl ">
				Hi! I love to use my knowledge and skills to create powerful and complete software. I focus
				on web application and cloud computing, I stay up to date with the newest technology stacks
			</p>
		</div>
		<a href={`#${PROJECTS_ID}`} class="w-full">
			<h3
				class="text-primary w-full md:pl-4 text-center text-2xl sm:text-4xl uppercase animate-bounce"
			>
				<b> My projects</b>
			</h3>
		</a>
	</div>
</div>

<RecapSection id={PROJECTS_ID} items={PROJECTS} />
<ShowcaseSection
	id={GENVISION_ID}
	title="Genvision"
	text={"I'm the IT manager of Genvision. Genvision is a singing talent show where teenagers compete representing their schools. I developed the necessary software to let audience vote and to allow the smooth operations of the project,"}
	href={PROJECT_LINKS[GENVISION_ID]}
>
	<div class="sm:flex-1 uppercase text-center flex justify-center">
		<a href={PROJECT_LINKS[GENVISION_ID]} target="_blank">
			<img
				src={PROJECT_IMAGES[GENVISION_ID]}
				alt="Genvision logo"
				class="max-w-[100px] sm:max-w-[250px] w-full"
			/>
		</a>
	</div>
</ShowcaseSection>
<ShowcaseSection
	id={MLAT_ID}
	title="Mi Lego Al Territorio"
	text={'I was part of the Mi Lego AL Territorio while I was studying at Politecnico di Torino. I designed and developed the team presentation website.'}
	href={PROJECT_LINKS[MLAT_ID]}
>
	<div class="sm:flex-1 uppercase text-center flex justify-center">
		<a href={PROJECT_LINKS[MLAT_ID]} target="_blank">
			<img
				src={PROJECT_IMAGES[MLAT_ID]}
				alt="Genvision logo"
				class="max-w-[100px] sm:max-w-[250px] w-full"
			/>
		</a>
	</div>
</ShowcaseSection>
<ShowcaseSection
	id={NEWSWORTHY_ID}
	title="Newsworthy"
	text={"I'm part of the Newsworthy team, we aim at building an information system that provides access to component_subscribe, objectvie and reliable news through the use of artificial intelligence"}
	href={PROJECT_LINKS[NEWSWORTHY_ID]}
>
	<div class="sm:flex-1 uppercase text-center font-gv text-5xl leading-tight flex justify-center">
		<a href={PROJECT_LINKS[NEWSWORTHY_ID]} target="_blank">
			<img
				src={PROJECT_IMAGES[NEWSWORTHY_ID]}
				alt="Newsworthy logo"
				class="max-w-[100px] sm:max-w-[200px] w-full"
			/>
		</a>
	</div>
</ShowcaseSection>
<ShowcaseSection
	id={CROWNLABS_ID}
	title="CrownLabs"
	text={'I contributed to the first 2 years of the CrownLabs project. It allows to access desktop enviromnments deployed on a Kubernetes cluster directly from the browser. I managed the frontend development team and worked on Kubernetes operators on the backend.'}
	href={PROJECT_LINKS[CROWNLABS_ID]}
>
	<div class="sm:flex-1 uppercase text-center font-gv text-5xl leading-tight flex justify-center">
		<a href={PROJECT_LINKS[CROWNLABS_ID]} target="_blank">
			<img
				src={PROJECT_IMAGES[CROWNLABS_ID]}
				alt="Crownlabs logo"
				class="max-w-[100px] sm:max-w-[250px] w-full"
			/>
		</a>
	</div>
</ShowcaseSection>
<ShowcaseSection
	id={LIQO_ID}
	title="Liqo"
	text={'I contributed to Liqo, an open-source project that eases Kubernetes multi-cluster topologies. I help the team with the DX of their software.'}
	href={PROJECT_LINKS[LIQO_ID]}
>
	<div class="sm:flex-1 uppercase text-center font-gv text-5xl leading-tight flex justify-center">
		<a href={PROJECT_LINKS[LIQO_ID]} target="_blank">
			<img
				src={PROJECT_IMAGES[LIQO_ID]}
				alt="Liqo logo"
				class="max-w-[100px] sm:max-w-[300px] w-full"
			/>
		</a>
	</div>
</ShowcaseSection>
<ShowcaseSection
	id={CIRULLINO_ID}
	title="Cirullino Bot"
	text={'I developed a telegram bot to play my home town traditional card game Cirulla. It allows to play togheter with your friends using just telegram messaging app.'}
	href={PROJECT_LINKS[CIRULLINO_ID]}
>
	<div class="sm:flex-1 uppercase text-center font-gv text-5xl leading-tight flex justify-center">
		<a href={PROJECT_LINKS[CIRULLINO_ID]} target="_blank">
			<img
				src={PROJECT_IMAGES[CIRULLINO_ID]}
				alt="Cirullino bot logo"
				class="max-w-[100px] sm:max-w-[200px] w-full"
			/>
		</a>
	</div>
</ShowcaseSection>
<ShowcaseSection
	id={CNGEI_ID}
	title="Sagra del Pesto"
	text={"I'm a scout, to help my local scout group I developed a web application to manage orders and payments for our annual food festival around the famous Pesto sauce."}
	href={PROJECT_LINKS[CNGEI_ID]}
>
	<div class="sm:flex-1 uppercase text-center font-gv text-5xl leading-tight flex justify-center">
		<a href={PROJECT_LINKS[CNGEI_ID]} target="_blank">
			<img
				src={PROJECT_IMAGES[CNGEI_ID]}
				alt="CNGEI logo"
				class="max-w-[100px] sm:max-w-[200px] w-full"
			/>
		</a>
	</div>
</ShowcaseSection>
