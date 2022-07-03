<script lang="ts">
	import { inview } from 'svelte-inview';

	let isInView: boolean;
	const options = {};
</script>

<div
	class="page-card bg-primary"
	on:enter={(event) => {
		const { inView, entry, scrollDirection, observer, node } = event.detail;
		isInView = inView;
		console.log('in viwew');
	}}
>
	<slot />
</div>
