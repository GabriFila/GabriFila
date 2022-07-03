<script lang="ts">
	import { onMount } from 'svelte';
	import { updateTotalPages } from '../stores/pageCursor';
	import RecapSection from '../components/RecapSection.svelte';

	onMount(updateTotalPages);
</script>

<RecapSection
	items={[
		{
			title: 'frontend',
			subItems: []
		},
		{
			title: 'backend',
			subItems: []
		},
		{
			title: 'beyond',
			subItems: []
		}
	]}
/>
