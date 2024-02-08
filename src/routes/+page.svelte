
<script>
	import { base } from '$app/paths';

	import Logo from '$lib/mainSite/Logo.svelte';
	import Typewriter from '$lib/mainSite/Typewriter.svelte';
    import Link from '$lib/mainSite/Link.svelte';
    import Icon from '$lib/Icon.svelte';
</script>

<!------------- TODO ------------->
<!------------ mobile ------------>

<body class="flex-center">
	<!-- This one is to make the slider sides be next to each other while the one above just centers shit -->
	<div class="flex-center">
		<Logo />
		<div class="slider-left slider-side">
			<div class="content">
				<h3 class="title">Hi, I'm Simon</h3>
				<Typewriter />
				<div class="linkContainer">
					<Link link="{base}/thoughts" text="Thoughts" />	
					<Link link="{base}/projects" text="Projects" />
					<Link link="https://discord.gg/jP9Um5rUKR" text="Todo" />
				</div>								
				<div class="IconsContainer">
					<Icon link="https://dc.jcms.dev" altText="Join my discord server!" iconName="discord" />
					<Icon link="https://github.com/JustCallMeSimon26" altText="Take a look at what im coding." iconName="github" />
					<Icon link="https://twitter.com/JustCallSimon" altText="Read my (rare) twee- ehh i mean X's" iconName="twitter" />
					<Icon link="https://youtube.com/@JCMS_" altText="Watch my non-existend videos." iconName="youtube" />
					<Icon link="https://twitch.tv/JCMSimon" altText="And my non-existend stream!" iconName="twitch" />
					<Icon link="mailto:contact@jcms.dev" altText="Or just send me a email i guess." iconName="email" />
				</div>
			</div>
		</div>
		<div class="slider-right slider-side">
			<img class="arrow" src="arrow.svg" alt="arrow pointing to the right">
		</div>
	</div>
</body>

<style>

	.flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-right: calc(2.5vw * var(--slider-size));
		overflow: hidden;
	}

	.title {
		font-size: max(calc(5vw * var(--slider-size)),calc(70px * var(--slider-size)));
		font-weight: 400;
		line-height: max(calc(5vw * var(--slider-size)), calc(70px * var(--slider-size)));
		margin: 0;
		font-family: Roboto;
		color: white;
	}
	
	.linkContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: max(calc(29vw * var(--slider-size)),calc(410px * var(--slider-size)));
		gap: max(calc(2vw * var(--slider-size)),calc(20px * var(--slider-size)));
		height: max(calc(2vw * var(--slider-size)),calc(50px * var(--slider-size)));
		/* reset before doing specific shit */
		margin: 0;
		margin-top: max(calc(1.2vh * var(--slider-size)),calc(6px * var(--slider-size)));
		margin-bottom: max(calc(2vh * var(--slider-size)),cal(10px * var(--slider-size)));
	}
	
	.IconsContainer {
		width: max(calc(29vw * var(--slider-size)),calc(410px * var(--slider-size)));
		height: max(calc(2vw * var(--slider-size)),calc(50px * var(--slider-size)));
		border-top: 1.1vmin dashed white;
		padding-top: 1vh;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: max(calc(2vw * var(--slider-size)),calc(20px * var(--slider-size)));
		margin-top: max(calc(1.6vh * var(--slider-size)),calc(8px * var(--slider-size)));
		margin-bottom: max(calc(2vh * var(--slider-size)),cal(10px * var(--slider-size)));
	}


	.slider-side {
		display: flex;
		aspect-ratio: 1.03896104	;
		width: max(calc(37vw * var(--slider-size)),calc(520px * var(--slider-size)));
		height: max(calc(34vw * var(--slider-size)),calc(480px * var(--slider-size)));
		border-top: 0.5vmin solid white;
		border-bottom: 0.5vmin solid white;
	}

	.slider-left {
		border-radius: 100% 0px 0px 100%;
		border-left: 0.5vmin solid white;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
	}

	.slider-right {
		border-radius: 0px 100% 100% 0px;
		border-right: 0.5vmin solid white;
		align-items: center;
	}

	.arrow {
		min-width: max(calc(15vw * var(--slider-size)),calc(250px * var(--slider-size)));
		width: max(calc(20vw * var(--slider-size)),calc(250px * var(--slider-size)));
		transform: translateX(-10%);
	}
	
</style>