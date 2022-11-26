<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	export let href: string;
	export let text: string;
	export let delayFactor = 0;

	let isActive = false;

	$: {
		isActive = href === $page.url.pathname;
	}
</script>

<div transition:fade={{ delay: 150 * delayFactor }} class="grow-on-hover" on:click>
	<a
		{href}
		class={` ${isActive ? 'text-secondary' : 'text-text'} transition-colors uppercase text-2xl`}
	>
		{text}
	</a>
	{#if $page.url.pathname == href}
		<div transition:fade={{ duration: 400 }} class="bg-secondary w-10/12 h-[2px] mx-auto" />
	{/if}
</div>
