<script>
	import { base } from '$app/paths';
	
	export let scale = 1
</script>

<a href="{base}/" style="scale: {scale}" class="backButton ctm-border ns invert-hover">Back</a>

<style>
	.backButton {
		background-color: var(--clr-background);
		color: var(--clr-accent);
		font-family: roboto;
		font-size: 5vw;
		border-radius: 30px;
		padding: 1vmin;
		margin-top: 0;
		text-decoration: none;
	}
</style>