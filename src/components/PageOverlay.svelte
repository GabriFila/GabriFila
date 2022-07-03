<script lang="ts">
	import { onMount } from 'svelte';
	import { updateTotalPages, pageIdx, totalPages } from '../stores/pageCursor';
	import { fade } from 'svelte/transition';

	onMount(updateTotalPages);
</script>

<div class="fixed h-full w-full flex flex-col justify-center">
	{#if $totalPages > 1}
		<div class="w-full flex justify-end pr-10">
			<div class="flex flex-col justify-between gap-3 items-center">
				{#each Array($totalPages) as page, i}
					<div
						transition:fade={{ delay: i * 200 }}
						class={`bg-secondary transition-all duration-300 ${
							$pageIdx === i ? 'w-4 h-4' : 'w-2 h-2'
						}`}
					/>
				{/each}
			</div>
		</div>
	{/if}
</div>
<slot />
