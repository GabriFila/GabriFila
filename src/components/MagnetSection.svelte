<script lang="ts">
	import { setPageIdx } from '../stores/pageCursor';

	import { inview } from 'svelte-inview';
	export let pageIdx: number;
</script>

<div
	class="page-card"
	use:inview={{ threshold: 0.25 }}
	on:enter={(ev) => {
		const {} = ev;
		setPageIdx(pageIdx);
	}}
>
	<slot />
</div>
