<script lang="ts">
	import MagnetSection from '../components/MagnetSection.svelte';
	import { onMount } from 'svelte';
	import { updateTotalPages } from '../stores/pageCursor';
	import type { RecapItem } from '../types';
	import ConditionalATagWrapper from './ConditionalATagWrapper.svelte';

	export let items: RecapItem[] = [];
	export let id: string | undefined = undefined;

	onMount(updateTotalPages);
</script>

<MagnetSection>
	<div
		{id}
		class="grid grid-cols-1 sm:grid-cols-3 flex-1 sm:p-3 sm:px-12 justify-between gap-2 sm:gap-4 "
	>
		{#each items as { id: subItemId, title, imgSrc }}
			<a href={`#${subItemId}`}>
				<div class="h-full bg-[#333333] flex items-center gap-4 sm:py-1 px-3 rounded-md">
					{#if imgSrc}
						<img src={imgSrc} class="w-10 h-w-10 sm:w-24 sm:h-24" alt={title} />
					{/if}
					<div class="flex flex-col sm:gap-1">
						{#if title}
							<h3 class="text-xl sm:text-2xl">{title}</h3>
						{/if}
						<div class="flex gap-2">
							<div class="text-primary text-sm rounded-md p-1">#OpenSource</div>
							<div class="text-primary text-sm rounded-md p-1">#WIP</div>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</MagnetSection>
