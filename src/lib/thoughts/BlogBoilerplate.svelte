<script>
	export let title
</script>

<div class="center">
	<div class="titleContainer ctm-border">
		<h2 class="title">{title}</h2>
	</div>
	<div class="content ctm-border">
		<slot></slot>
	</div>
	<div class="watermark">
		<h2 class="watermark-name">JCMS</h2>
		<h3 class="watermark-title">{title}</h3>
	</div>
</div>


<style>
	.titleContainer	{
		width: 85vw;
		height: 18vh;
		border-top: none;
		border-bottom: none;
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
	
	.content {
		width: 85vw;
		padding-bottom: 1vh;
	}
	
	.watermark {
		position: fixed;
		top: 50%;
		opacity: 0.05;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transform: translateY(-40%);
		user-select: none;
		z-index: -1;
	}
	
	
	.watermark-name {
		margin: 0;
		color: white;
		font-size: 20vw;
		font-family: "Boston Traffic";
		border-bottom: 0.5vmin solid white;
		line-height: 18vw;
	}
	
	.watermark-title	{
		text-align: center;
		font-size: 4vw;
		margin-top: 3vh;	
		margin-bottom: 2vh;	
		color: white;
		font-family: "Boston Traffic";
	}
</style>