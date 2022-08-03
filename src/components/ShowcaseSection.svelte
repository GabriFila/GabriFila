<script lang="ts">
	import MagnetSection from './MagnetSection.svelte';
	export let id: string;
	export let text: string;
	export let title: string;
	export let href: string;
</script>

<MagnetSection>
	<div
		{id}
		class="flex flex-col text-center sm:text-left sm:flex-row justify-center items-center h-full sm:px-16 text-lg sm:text-xl gap-12"
	>
		<div class="sm:flex-1 flex flex-col gap-2">
			<div class="flex gap-3 items-center justify-center sm:justify-start">
				<h2 class="text-primary uppercase text-3xl">
					<b>{title}</b>
				</h2>
				<a {href} target="_blank">
					<i class="fa-solid fa-up-right-from-square text-primary text-xl ml-1" />
				</a>
			</div>
			<p class="flex-1">
				{text}
			</p>
		</div>

		<div class="sm:flex-1">
			<slot />
		</div>
	</div>
</MagnetSection>
