<script lang="ts">
	import '../global.css';
	import NavLink from '../components/NavLink.svelte';
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { pageIdx, totalPages } from '../stores/pageCursor';

	const NAV_LINKS: { href: string; text: string }[] = [
		{ text: 'tech stack', href: '/tech-stack' },
		{ text: 'resume', href: '/resume' }
	];
	const ICONS_CLASSES: { href: string; classes: string }[] = [
		{ classes: 'fa-solid fa-envelope', href: 'mailto:gabriele.filaferro@gmail.com' },
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
		in:fly={{ x: 400 }}
		out:fade={{ duration: 500 }}
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
				<NavLink {href} {text} delayFactor={i + 1} on:click={toggleMobileMenu} />
			{/each}
		</nav>
	</div>
{/if}
<div
	class="relative h-full sm:snap-y sm:snap-mandatory sm:snap-always sm:overflow-y-auto scroll-smooth"
>
	<slot />
</div>
<div
	class="fixed w-full h-full sm:p-10 flex flex-col top-0 left-0 justify-between pointer-events-none"
>
	<div
		class="bg-bgStart sm:bg-[transparent] p-4 sm:p-0 flex flex-col sm:flex-row justify-between sm:items-start items-center mb-6 pointer-events-auto"
	>
		<div class="flex  justify-between flex-1 w-full items-center">
			<a href="/">
				<h1 class="capitalize font-bold text-3xl sm:text-5xl grad-text">Gabriele Filaferro</h1>
				<h2 class="capitalize text-lg sm:text-2xl text-text sm:mt-1">
					Full Stack Software Engineer
				</h2>
			</a>
			<i on:click={toggleMobileMenu} class="fa-solid fa-bars sm:hidden text-secondary text-3xl" />
		</div>
		<nav class="sm:flex justify-end gap-6 hidden sm:visible ">
			{#each NAV_LINKS as { text, href }}
				<NavLink {href} {text} />
			{/each}
		</nav>
	</div>
	{#if $totalPages > 1}
		<div class="hidden w-full sm:flex justify-end">
			<div class="flex flex-col justify-between gap-3 items-center">
				{#each Array($totalPages) as page, i}
					<div
						in:fade={{ delay: i * 200 }}
						out:fade
						class={`bg-secondary rounded-sm cursor-pointer pointer-events-auto grow-on-hover transition-all duration-300 ${
							$pageIdx === i ? 'w-4 h-4' : 'w-2 h-2 m-2'
						}`}
						on:click={() => {
							document.querySelectorAll('.page-card')[i].scrollIntoView();
						}}
					/>
				{/each}
			</div>
		</div>
	{/if}
	<div class="flex justify-between items-end pointer-events-auto p-4 sm:p-0">
		<p class="hidden sm:block text-text text-xs sm:text-xl ">
			<a href="https://github.com/GabriFila/GabriFila" target="_blank">
				Built with SvelteKit
				<i class="fa-solid fa-up-right-from-square text-text text-base ml-1" />
			</a>
		</p>
		<div class="w-full flex justify-end">
			<div
				class=" py-1 sm:py-0 px-2 sm:px-0 shadow-lg sm:shadow-none rounded-lg sm:rounded-none bg-bgStart sm:bg-[transparent] flex justify-end gap-3 "
			>
				{#each ICONS_CLASSES as { classes, href }}
					<a {href} target="_blank">
						<i class={`${classes} text-2xl sm:text-3xl text-text grow-on-hover`} />
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	:root {
		--bg-grad: linear-gradient(112.86deg, #131313 0.59%, #202020 99.62%);
		--primary-color-values: 33, 97%, 70%;
		--secondary-color-values: 358, 100%, 68%;
		--primary-wheel-color-values: 33, 97%, 70%;
		--secondary-wheel-color-values: 358, 100%, 68%;
		--primary-wheel-color: hsl(var(--primary-wheel-color-values));
		--secondary-wheel-color: hsl(var(--secondary-wheel-color-values));
	}

	:global(body) {
		background: var(--bg-grad);
	}
	@media (max-width: 640px) {
		:global(body) {
			background: #131313;
		}
	}
	.grad-text {
		background: -webkit-linear-gradient(
			0deg,
			var(--primary-wheel-color),
			var(--secondary-wheel-color)
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
