<script>
	import { showContent } from '$lib/mainSite/store.js';

	$: opened = $showContent;
	
	// Update the store when opened changes
	function toggleOpened() {
		showContent.set(!opened);
	}
	
</script>


<button title="Click me!" class="logoContainer ctm-border flex-center sn" class:getAttention={!opened} class:moveOver={opened} on:click={toggleOpened}>
	<img src="logo.svg" alt="JCMS" class="logoImg">
</button>


<style>

:root {
	--logo-move-distance: 48%;
}
	
.logoContainer {
	background-color: var(--clr-background);
	position: absolute;
	border-radius: 69%;
	min-width: max(calc(38vw * var(--slider-size)),calc(530px * var(--slider-size)));
	aspect-ratio: 1;
	z-index: 69;
	transition: 700ms transform;
	/* Put it above the content untill the button is pressed */
	transform: translateX(calc(var(--logo-move-distance) * -1));
}

.logoContainer:hover {
	cursor: pointer;
}

/* If i dont do this its slightly too big tbh */
.logoImg {
	max-width: 80%;
}

/* This moves it to the side when you click it yes yes */
.getAttention::after {
	pointer-events: none;
	content: '';
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	border-radius: 69%;
	animation: shockwave 1s .65s ease-out infinite;
	/* This makes the transition from having the animation and not having it smoother (somehow) */
	transition: 10s;
}

.moveOver {
	transform: translateX(var(--logo-move-distance));
}

/* 
Credit to jeryj for this animation (which i changed slightly) (https://codepen.io/jeryj/pen/LzPjdJ)
*/
@keyframes shockwave {
	0% {
    transform: scale(1);
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.15), inset 0 0 1px rgba(255, 255, 255, 0.15);
  }
  95% {
    box-shadow: 0 0 50px rgba(255, 255, 255, 0), inset 0 0 30px rgba(255, 255, 255, 0);
  }
  100% {
    transform: scale(1.15);
  }
}

</style>