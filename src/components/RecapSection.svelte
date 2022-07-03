<script lang="ts">
	import MagnetSection from '../components/MagnetSection.svelte';
	import { onMount } from 'svelte';
	import { updateTotalPages } from '../stores/pageCursor';
	import type { RecapItem } from '../types';
	import ConditionalAWrapper from './ConditionalAWrapper.svelte';

	export let items: RecapItem[] = [];

	onMount(updateTotalPages);
</script>

<MagnetSection>
	<div class="flex flex-1 flex-col justify-center gap-8 sm:gap-20">
		{#each items as { id, title, subItems }}
			<ConditionalAWrapper href={`#${id}`} condition={!!id}>
				<div class="flex flex-col justify-center">
					<h2 class="text-center text-2xl sm:text-4xl uppercase text-primary sm:mb-2">
						<b>{title}</b>
					</h2>
					<div class="flex flex-col sm:flex-row justify-center gap-1 sm:gap-20">
						{#each subItems as { id: subItemId, name }}
							<ConditionalAWrapper href={`#${subItemId}`} condition={!!subItemId}>
								<h3 class="text-center text-xl sm:text-3xl">{name}</h3>
							</ConditionalAWrapper>
						{/each}
					</div>
				</div>
			</ConditionalAWrapper>
		{/each}
	</div>
</MagnetSection>
