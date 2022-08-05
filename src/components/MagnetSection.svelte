<script lang="ts">
	import { setPageIdx } from '../stores/pageCursor';

	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';
	import { getId } from '../stores/ids';

	const id = getId();
	let idx: undefined | number = undefined;
	export let classes: string = '';

	onMount(() => {
		idx = Array.from(document.querySelectorAll('.page-card')).findIndex((el) => el.id === id);
	});
</script>

<div
	{id}
	class={`p-2 sm:page-card ${classes}`}
	use:inview={{ threshold: 0.25 }}
	on:enter={(ev) => {
		const {} = ev;
		setPageIdx(idx || 0);
	}}
>
	<slot />
</div>
