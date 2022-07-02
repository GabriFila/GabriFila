<script lang="ts">
	import '../global.css';
	import NavLink from '../components/NavLink.svelte';
	import { fade, fly } from 'svelte/transition';

	const NAV_LINKS: { href: string; text: string }[] = [
		{ text: 'projects', href: '/projects' },
		{ text: 'tech stack', href: '/tech-stack' },
		{ text: 'resume', href: '/resume' }
	];
	const ICONS_CLASSES: { href: string; classes: string }[] = [
		{ classes: 'fa-brands fa-instagram-square', href: 'https://www.instagram.com/gabri.fila/' },
		{ classes: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/gabriele-filaferro/' },
		{ classes: 'fa-brands fa-github', href: 'https://github.com/GabriFila' }
	];
	let isMenuOpen = false;

	function toggleMobileMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

{#if isMenuOpen}
	<div
		transition:fly={{ y: -400 }}
		class="fixed z-40 w-full h-full sm:hidden"
		style="background: var(--bg-grad); relative"
	>
		<i
			on:click={toggleMobileMenu}
			class="fa-solid fa-xmark absolute text-4xl top-6 right-6 text-primary"
		/>
		<nav class="flex justify-center gap-20 flex-col items-center h-full">
			{#each NAV_LINKS as { text, href }, i}
				<NavLink {href} {text} delayFactor={i + 1} />
			{/each}
		</nav>
	</div>
{/if}
<div style="background: var(--bg-grad);" class="w-full h-full p-5 sm:p-10 flex flex-col">
	<div class="flex flex-col sm:flex-row justify-between sm:items-start items-center mb-6">
		<div class="flex flex-col items-center ">
			<a href="/">
				<h1 class="text-center mb-2 sm:mb-0 sm:text-left capitalize font-bold text-5xl">
					Gabriele Filaferro
				</h1>
				<h2 class="text-center sm:text-left capitalize text-2xl text-text ">
					Full Stack Software Engineer
				</h2>
			</a>
			<i
				on:click={toggleMobileMenu}
				class="fa-solid fa-bars sm:hidden text-primary text-3xl mt-4"
			/>
		</div>
		<nav class="sm:flex justify-end gap-6 hidden sm:visible ">
			{#each NAV_LINKS as { text, href }}
				<NavLink {href} {text} />
			{/each}
		</nav>
	</div>
	<div class="flex-1">
		<slot />
	</div>
	<div class="flex justify-between ">
		<p class="text-primary text-xl">
			Built with
			<a href="https://kit.svelte.dev/" target="_blank" class="border-b-primary border-b-2">
				SvelteKit
			</a>
		</p>
		<div class="flex gap-3 ">
			{#each ICONS_CLASSES as { classes, href }}
				<a {href} target="_blank">
					<i class={`${classes} text-3xl text-secondary grow-on-hover`} />
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	:root {
		--bg-grad: linear-gradient(112.86deg, #1c1c1c 0.59%, #262626 99.62%);
		--primary-color: #fdba66;
		--secondary-color: #fd6d71;
	}

	h1 {
		background: -webkit-linear-gradient(0deg, var(--primary-color), var(--secondary-color));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
