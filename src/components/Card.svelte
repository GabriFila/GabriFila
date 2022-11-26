<script lang="ts">
	let classes = '';
	export { classes as class };
</script>

<div
	class={`bg-[#222222] flex items-center gap-4 py-1 px-3 rounded-md grow-on-hover hover:scale-105 ${classes}`}
>
	<slot />
</div>
