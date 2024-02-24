<script>
	import { onMount } from 'svelte';

	let textElement;
	let strings = [
		"self taught developer", 
		"random german dude",	 
		"public data enjoyer",   
		"free life appreciator", 
];
	let stringIndex = 0;
	let charIndex = 0;
	let isDeleting = false;

	function type() {	
	  const currentString = strings[stringIndex];
	  if (!isDeleting) {
		textElement.textContent = currentString.substring(0, charIndex + 1);
		charIndex++;
	  } else {
		textElement.textContent = currentString.substring(0, charIndex - 1);
		charIndex--;
	  }

	  if (charIndex === currentString.length) {
		isDeleting = true;
		setTimeout(type, 3000); // Delay before starting to delete
	  } else if (charIndex === 0) {
		isDeleting = false;
		stringIndex = (stringIndex + 1) % strings.length;
		setTimeout(type, 300); // Delay before typing the next string
	  } else {
		if (isDeleting) {
			setTimeout(type, 40); // Typing speed
		} else {
			setTimeout(type, Math.random() * 180 + 90); // Randomise Typing speed if its not deleting
		}
	  }
	}

	onMount(() => {
	  type(); // Start the typewriter effect after the component mounts
	});
	</script>

<div class="typewriter sn" bind:this={textElement}></div>

<style>
.typewriter {
	font-family: Roboto;
	color: var(--clr-accent);
	font-size: max(2.72vw,37px);
	font-weight: 400;
	margin: 0;
	border-bottom: 1.1vmin dashed var(--clr-accent);
	padding-bottom: max(1vh,10px);
	max-width: calc(29vw * var(--slider-size));
	/* Cut text off if i ever fuck up */
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.typewriter::before {
	content: "A ";
}

.typewriter::after {
	position: absolute;
	content: "┃";
	font-family: monospace;
	animation: blink 1s ease-in-out infinite;
}

@keyframes blink {
0%, 100% {
	color: var(--clr-accent);
}
50% {
	color: var(--clr-background);
}
}  </style>
