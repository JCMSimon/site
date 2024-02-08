<script>
	import { base } from '$app/paths';
	
	export let link=null
	export let altText
	export let iconName
</script>

{#if (link)}
<a class="icon" href="{link}" target="_blank">
	<img class="iconImg" src="{base}/icons/{iconName}.svg" alt="{altText}">
</a>
{:else}
<button class="icon">
	<img class="iconImg" src="{base}/icons/{iconName}.svg" alt="{altText}">
</button>
{/if}

<style>

.icon {
	background-color: black;
	border: none;
	min-height: 31.5px;
	min-width: 31.5px;
	height: 3vw;
	width: 3vw;
	cursor: pointer;
	transition: 200ms filter;
	border-radius: 69%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.icon:hover{
	filter:invert();
}
</style>
