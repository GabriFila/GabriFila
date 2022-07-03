<script lang="ts">
	import MagnetSection from '../components/MagnetSection.svelte';
	import { onMount } from 'svelte';
	import { updateTotalPages } from '../stores/pageCursor';

	onMount(updateTotalPages);
</script>

<MagnetSection pageIdx={0}>
	<div class="flex w-full flex-col items-center h-full justify-center gap-10">
		<h3 class="text-center text-text text-2xl max-w-lg">
			Excuse me, the dev responsible for this website (me) <br />didn't write his resume in HTML.
			<br />
			<br />
			Please enjoy the PDF version
		</h3>
		<div class="flex gap-5">
			<a href="/resume.pdf" target="_blank">
				<i class="fa-solid fa-up-right-from-square text-secondary text-2xl" />
			</a>
			<a href="/resume.pdf" download="CV Gabriele Filaferro.pdf">
				<i class="fa-solid fa-download text-secondary text-2xl" />
			</a>
		</div>
	</div>
</MagnetSection>
