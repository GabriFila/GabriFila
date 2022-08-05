<script lang="ts">
	import MagnetSection from '../components/MagnetSection.svelte';
	import { onMount } from 'svelte';
	import { updateTotalPages } from '../stores/pageCursor';
	import type { RecapItem } from '../types';
	import Card from './Card.svelte';

	export let items: RecapItem[] = [];
	export let id: string | undefined = undefined;

	onMount(updateTotalPages);
</script>

<MagnetSection>
	<div
		{id}
		class="grid grid-cols-1 md:grid-cols-3 flex-1 md:py-12 md:px-12 justify-between gap-1 md:gap-6 scroll-mt-28 sm:scroll-mt-0"
	>
		{#each items as { id: subItemId, title, imgSrc, tags }}
			<a href={`#${subItemId}`}>
				<Card>
					<div class="flex items-center p-1 sm:p-5 gap-4">
						{#if imgSrc}
							<img src={imgSrc} class="w-10 h-w-10 sm:w-16 sm:h-16 xl:w-24 xl:h-24" alt={title} />
						{/if}
						<div class="flex flex-col sm:gap-1">
							{#if title}
								<h3 class="text-xl sm:text-2xl">{title}</h3>
							{/if}
							<div class="flex gap-1">
								{#each tags ?? [] as tag}
									<div class="text-primary text-base rounded-md p-1">#{tag}</div>
								{/each}
							</div>
						</div>
					</div>
				</Card>
			</a>
		{/each}
	</div>
</MagnetSection>
