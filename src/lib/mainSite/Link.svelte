<script>
	export let link
	export let text
	
</script>

	<a href="{link}" class="link">{text}</a>

<style>
	.link {
		font-family: Roboto;
		color: white;
		background-color: black;
		text-align: center;
		font-size: max(calc(1.5vw * var(--slider-size)),calc(35px * var(--slider-size)));
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-decoration-line: underline;
		transition: 200ms filter;
		padding-left: max(0.5vw,5px);
		padding-right: max(0.5vw,5px);
		border-radius: 2vmin;
	}
	.link:hover{
	filter:invert();
}

</style>