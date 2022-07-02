<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	export let href: string;
	export let text: string;
	export let delayFactor: number = 0;
</script>

<div transition:fade={{ delay: 250 * delayFactor }}>
	<a {href} class="text-secondary uppercase text-2xl"> {text} </a>
	{#if $page.url.pathname == href}
		<div transition:fade={{ duration: 400 }} class="bg-secondary w-10/12 h-[2px] mx-auto" />
	{/if}
</div>
