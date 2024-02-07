<script>
	import { showContent } from '$lib/mainSite/store.js';

	$: opened = $showContent;
	
	// Update the store when opened changes
	function toggleOpened() {
		showContent.set(!opened);
	}
</script>


<button title="Click me!" class="logo ctm-border" class:attention={!opened} class:move={opened} on:click={toggleOpened}>
	<img src="logo.svg" alt="JCMS" class="logoImg">
</button>


<style>
.logo {
	z-index: 1;
	border-radius: 69%;
	min-width: max(calc(38vw * var(--slider-size)),calc(530px * var(--slider-size)));
	aspect-ratio: 1;
	position: absolute;
	transition: 700ms transform;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;
	cursor: pointer;
	/* Put it above the content untill the button is pressed */
	transform: translateX(-48%);
}

/* If i dont do this its slightly too big tbh */
.logoImg {
	min-width: 80%;
	max-width: 80%;
}

/* This moves it to the side when you click it yes yes */
.attention::after {
	cursor: default;
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	border-radius: 50%;
	transition: 1s;
	animation: shockwave 1s .65s ease-out infinite;
	/* This is a cheap trick so that i dont have to edit the colors of the animation i stole lol  */
	filter: invert();
}
.move {
	transform: translateX(48%);
}

 /* Credit to jeryj for this (https://codepen.io/jeryj/pen/LzPjdJ) */
@keyframes shockwave {
  0% {
	transform: scale(1);
	box-shadow: 0 0 2px rgba(0,0,0,0.15), inset 0 0 1px rgba(0,0,0,0.15);
  }
  95% {
	box-shadow: 0 0 50px rgba(0,0,0,0), inset 0 0 30px rgba(0,0,0,0);
  }
  100% {
	transform: scale(1.13);
  }
}

</style>