<script lang="ts">
	export let condition = false;
	export let href: string;
</script>

{#if condition}
	<a {href} {...$$restProps}><slot /></a>
{:else}
	<slot />
{/if}
