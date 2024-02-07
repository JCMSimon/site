<script>
	export let link
	export let altText
	export let iconName
</script>

<a class="icon" href="{link}" target="_blank">
	<img class="iconImg" src="icons/{iconName}.svg" alt="{altText}">
</a>

<style>

.icon {
	background-color: black;
	border: none;
	min-height: 31.5px;
	min-width: 31.5px;
	height: 3vw;
	width: 3vw;
	cursor: pointer;
	transition: 200ms filter;
	border-radius: 69%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.icon:hover{
	filter:invert();
}
</style>
