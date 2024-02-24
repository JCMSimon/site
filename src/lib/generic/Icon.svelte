<script>
	import { base } from '$app/paths';
	
	export let link=null
	export let altText
	export let iconName
</script>

{#if (link)}
<a class="icon flex-center invert-hover sn" href="{link}" target="_blank">
	<img class="iconImg" src="{base}/icons/{iconName}.svg" alt="{altText}">
</a>
{:else}
<button class="icon flex-center invert-hover sn">
	<img class="iconImg" src="{base}/icons/{iconName}.svg" alt="{altText}">
</button>
{/if}

<style>

.icon {
	background-color: var(--clr-background);
	min-height: calc(31.5px * var(--slider-size));
	min-width: calc(31.5px * var(--slider-size));
	height: calc(3vw * var(--slider-size));
	width: calc(3vw * var(--slider-size));
	cursor: pointer;
	border-radius: 69%;
}

</style>
