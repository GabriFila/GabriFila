<script lang="ts">
	import { onMount } from 'svelte';
	import { updateTotalPages } from '../stores/pageCursor';

	onMount(updateTotalPages);
</script>

<div class="page-card">
	<div class=" flex flex-col h-full justify-center items-center gap-10">
		<div
			class=" flex flex-col sm:flex-row-reverse sm:h-full justify-center items-center gap-5 sm:gap-24 px-[5%]"
		>
			<div class="sm:flex-1 flex justify-center items-center sm:items-start">
				<div class="max-w-[20vh] max-h-[20vh] sm:max-h-fit sm:max-w-sm">
					<img class="rounded-[50%] h-full w-full" src="/head.webp" alt="Gabri's profile pic" />
				</div>
			</div>
			<p class="text-center sm:text-left text-text  text-xl sm:flex-1 max-w-3xl ">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga praesentium nobis quisquam
				consequuntur nihil quis minima aliquam modi perspiciatis possimus neque, voluptatum iure
				officia laborum odio blanditiis fugit.
			</p>
		</div>
		<a href="/projects">
			<h3 class="text-primary text-center text-2xl sm:text-3xl uppercase">My projects</h3>
		</a>
	</div>
</div>
