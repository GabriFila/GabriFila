<script lang="ts">
	let classes = '';
	export { classes as class };
</script>

<div
	class={`bg-[#333333] flex items-center gap-4 py-1 px-3 rounded-md grow-on-hover hover:scale-105 ${classes}`}
>
	<slot />
</div>
