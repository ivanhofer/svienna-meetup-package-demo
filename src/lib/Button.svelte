<script lang="ts">
	type $$Props = Partial<HTMLButtonElement> & {
		loading?: boolean
	}

	export let loading = false
</script>

<button {...$$restProps}>
	{#if loading}
		loading...
	{:else}
		<slot />
	{/if}
</button>

<style lang="scss">
	@import './variables.scss';

	button {
		background-color: $my-color;
	}
</style>
