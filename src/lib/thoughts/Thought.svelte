<script>
	import { base } from '$app/paths';
	import Icon from "$lib/Icon.svelte";

	export let title
	export let date
	
	export let manage=false
	export let isPublic=false	

	function convertUnixToDateString(unixTimestamp) {
	// Convert Unix timestamp to milliseconds
	const milliseconds = unixTimestamp * 1000;
	
	// Create a new Date object
	const date = new Date(milliseconds);

	// Get day name
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const dayName = days[date.getUTCDay()];

	// Get day, month, and year
	const day = date.getUTCDate();
	const month = date.getUTCMonth() + 1; // Months are zero-based
	const year = date.getUTCFullYear();

	// Format the date string
	const dateString = `${dayName} ${day}/${month}/${year}`;

	return dateString;
	}	

	let dateText = convertUnixToDateString(date)

	function togglePublic() {
		isPublic = !isPublic
	}

</script>

<div class="thoughtContainer">
	<img src="{base}/arrow2.svg" alt="" class="arrow2">
	<h2 class="thoughtTitle" title="{title}">{title}</h2>
	{#if (manage)}
		<div class="iconContainer">
			{#if (isPublic)}
				<Icon altText="Turn private" iconName="discord" on:click={togglePublic}></Icon>
			{:else}
				<Icon altText="Turn public" iconName="twitter" on:click={togglePublic}></Icon>
			{/if}
			<Icon altText="Open" iconName="view"></Icon>
			<Icon altText="Rename" iconName="rename"></Icon>
			<Icon altText="Edit" iconName="edit"></Icon>
			<Icon altText="Delete" iconName="delete"></Icon>
		</div>
	{/if}
	<h2 class="dateText">{dateText}</h2>
</div>

<style>
	.thoughtContainer {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1vw;
		margin-left: 2vw;
		margin-right: 2vw;
	}
	
	.arrow2 {
		height: 6vh;
	}
	
	.thoughtTitle {
		color: white;
		font-family: Roboto;
		font-size: 8vh;
		margin: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 62vw;
	}

	.iconContainer {
		margin-left: auto;
		display: flex;
		flex-direction: row;
		gap: 0.5vw;
	}
	
	.dateText {
		color: white;
		font-family: Roboto;
		font-size: 5vh;
		margin: 0;
		margin-left: auto;
		white-space: nowrap;
	}
	

</style>
