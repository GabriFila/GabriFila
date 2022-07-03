<script lang="ts">
	import MagnetSection from './MagnetSection.svelte';
	export let id: string;
	export let text: string;
	export let pageIdx: number;
	export let title: string;
</script>

<MagnetSection {pageIdx}>
	<div
		{id}
		class="flex flex-col text-center sm:text-left sm:flex-row justify-center items-center h-full sm:px-16 text-xl gap-12"
	>
		<div class="sm:flex-1">
			<h2 class="text-primary uppercase text-3xl"><b>{title}</b></h2>
			<p class="flex-1">
				{text}
			</p>
		</div>

		<div class="sm:flex-1">
			<slot />
		</div>
	</div>
</MagnetSection>
