<script>
	export let link="/"
	export let text="Lorem"
	
</script>

	<a href="{link}" class="link invert-hover sn">{text}</a>

<style>
	.link {
		font-family: Roboto;
		color: var(--clr-accent);
		background-color: var(--clr-background);
		text-align: center;
		font-size: max(calc(1.5vw * var(--slider-size)),calc(35px * var(--slider-size)));
		padding-left: max(0.5vw,5px);
		padding-right: max(0.5vw,5px);
		border-radius: 1vmin;
	}

</style>