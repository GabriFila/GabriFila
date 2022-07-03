<script lang="ts">
	import '../global.css';
	import NavLink from '../components/NavLink.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';

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

	function spin(_: Element, { duration }: { duration: number }) {
		return {
			duration,
			css: (t: number) => {
				const eased = cubicOut(t);
				console.log(eased);
				return `transform: rotate(${eased * -180}deg);`;
			}
		};
	}

	const HSL_REGEX = /(\d{0,3}),\s(\d{0,2})%,\s(\d{0,2})%/;
	onMount(() => {
		setInterval(() => {
			increaseHueCssVar('--primary-color-values');
			increaseHueCssVar('--secondary-color-values');
		}, 700);

		function increaseHueCssVar(prop: string) {
			const value = getCssVariable(prop);

			const HUE = value?.match(HSL_REGEX)?.[1];
			if (HUE) {
				setCssVariable(prop, `${(Number(HUE) + 1) % 359}, 96%, 69%`);
			}
		}

		const CSS_ROOT = document?.querySelector(':root') as HTMLElement | undefined;

		function setCssVariable(prop: string, value: string) {
			CSS_ROOT?.style.setProperty(prop, value);
		}

		function getCssVariable(prop: string): string | undefined {
			if (CSS_ROOT) return getComputedStyle(CSS_ROOT).getPropertyValue(prop);
		}
	});
</script>

{#if isMenuOpen}
	<div
		transition:fly={{ x: 400 }}
		class="fixed z-40 w-full h-full sm:hidden"
		style="background: var(--bg-grad); relative"
	>
		<i
			transition:spin={{ duration: 1200 }}
			on:click={toggleMobileMenu}
			class="fa-solid fa-xmark absolute text-4xl top-8 right-8 text-primary"
		/>
		<nav class="flex justify-center gap-20 flex-col items-center h-full">
			{#each NAV_LINKS as { text, href }, i}
				<NavLink {href} {text} delayFactor={i + 1} />
			{/each}
		</nav>
	</div>
{/if}
<div class="relative h-full snap-y snap-mandatory snap-always overflow-y-auto scroll-smooth">
	<slot />
</div>
<div
	class="fixed w-full h-full p-4 sm:p-10 flex flex-col top-0 left-0 justify-between pointer-events-none"
>
	<div
		class="flex flex-col sm:flex-row justify-between sm:items-start items-center mb-6 pointer-events-auto"
	>
		<div class="flex justify-between flex-1 w-full items-center">
			<a href="/">
				<h1 class="capitalize font-bold text-3xl sm:text-5xl">Gabriele Filaferro</h1>
				<h2 class="capitalize text-lg sm:text-2xl text-text ">Full Stack Software Engineer</h2>
			</a>
			<i on:click={toggleMobileMenu} class="fa-solid fa-bars sm:hidden text-secondary text-3xl" />
		</div>
		<nav class="sm:flex justify-end gap-6 hidden sm:visible ">
			{#each NAV_LINKS as { text, href }}
				<NavLink {href} {text} />
			{/each}
		</nav>
	</div>
	<div class="flex justify-between items-end pointer-events-auto">
		<p class="text-primary text-lg sm:text-xl">
			Built with
			<a href="https://kit.svelte.dev/" target="_blank" class="border-b-primary border-b-2">
				SvelteKit
			</a>
		</p>
		<div class="flex gap-3 ">
			{#each ICONS_CLASSES as { classes, href }}
				<a {href} target="_blank">
					<i class={`${classes} text-2xl sm:text-3xl text-secondary grow-on-hover`} />
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	:root {
		--bg-grad: linear-gradient(112.86deg, #1c1c1c 0.59%, #262626 99.62%);
		--primary-color-values: 20, 96%, 69%;
		--secondary-color-values: 240, 96%, 69%;
		--primary-color: hsl(var(--primary-color-values));
		--secondary-color: hsl(var(--secondary-color-values));
	}

	:global(body) {
		background: var(--bg-grad);
	}
	h1 {
		background: -webkit-linear-gradient(0deg, var(--primary-color), var(--secondary-color));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
