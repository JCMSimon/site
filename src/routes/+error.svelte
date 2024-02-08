<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { base } from '$app/paths';
	import BackButton from "$lib/backButton.svelte"
	
	let randomCatImage = "";
   
	async function getImage() {
	  try {
		const response = await fetch("https://api.thecatapi.com/v1/images/search");
		const data = await response.json();
		randomCatImage = data[0].url;
	  } catch (error) {
		console.error("Error fetching cat image (dont care lol | show my logo ig)", error);
	  }
	};
  </script>

<div class="content">
	<h1 class="title text">{$page.status} - {$page.error.message}</h1>
	{#await getImage()}
		<h2 style="color:white">Looking for a cute cat...</h2>
	{:then _} 
		{#if randomCatImage}
			<h2 class="description text">This is not a valid url but... take this cat!</h2>
			<img class="img404 ctm-border" src={randomCatImage} alt="A (probably) really cute cat :3" />
		{:else}
			<h2 class="description text">This is not a valid url and... id show you a cute cat but that didnt work :c</h2>
			<img class="img404 ctm-border" src="{base}/logo.svg" alt="JCMS" title="just my logo :c (take at least this cat: 🐈)" />
		{/if}
	{/await}
	<BackButton scale="0.85"/>
</div>

<style>
	.content {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2vh;
	}
	
	.text {
		color: white;
		font-family: Roboto;
	}
	
	.img404 {
		border-color: black;
		max-width: 80%;
		max-height: 30%;
		min-height: 0px;
		transition: 0.5s ease-out;
	}
	
	.img404:hover {
		border-color: white;
		min-height: 96vh;
		max-width: 90vw;
		padding: 1vh;
		z-index: 5;
		transform: translateY(-3.5vh);
	}
	
</style>