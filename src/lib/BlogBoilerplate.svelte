<script>
	export let title
</script>

<div class="center">
	<div class="titleContainer ctm-border">
		<h2 class="title">{title}</h2>
	</div>
	<div class="contentContainer ctm-border">
		<div class="content">
			<slot></slot>
			<div class="footer title">HELLO</div>
		</div>
		<div class="watermark">
			<h2 class="name">JCMS</h2>
			<h3 class="titleAGAIN">{title}</h3>
		</div>
	</div>
</div>


<style>
	.titleContainer	{
		width: 85vw;
		height: 18vh;
		border-top: none;
	}
	
	.title	{
		text-align: center;
		font-size: 12vh;
		margin: 0;
		margin-top: 3vh;	
		color: white;
		font-family: "Boston Traffic";
	}
	
	
	.center {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: auto;
	}
	
	.contentContainer {
		height: 100vh;
		border-top: none;
		border-bottom: none;
		width: 85vw;
	}
	
	.content {
		display: flex;
		flex-direction: column;
		gap: 2vh;
		position: absolute;
		width: 85vw;
		z-index: 2;
	}
	
	
	
	.watermark {
		position: fixed;
		top: 50%;
		width: 85vw;
		height: 80vh;
		height: 80vh;
		opacity: 0.05;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transform: translateY(-45%);
	}

	.name {
		margin: 0;
		color: white;
		font-size: 20vw;
		font-family: "Boston Traffic";
		border-bottom: 0.5vmin solid white;
		line-height: 18vw;
	}
	
	.titleAGAIN	{
		text-align: center;
		font-size: 4vw;
		margin-top: 3vh;	
		margin-bottom: 2vh;	
		color: white;
		font-family: "Boston Traffic";
	}
</style>