<script>
    import BackButton from "$lib/soon/backButton.svelte";
</script>

<body>
	<div class="flex-center soonContainer">
		<h2 class="soon-text">soon</h2>
		<BackButton />
	</div>
</body>

<style>
	
	.soon-text {
		color: var(--clr-accent);
		font-size: 8rem;
		margin: 0;
		margin-bottom: 5vh;
	}
		
	.soon-text::after {
		position: absolute;
		content: "™";
	}

	.soonContainer {
		flex-direction: column;
		height:100vh;
	}
</style>