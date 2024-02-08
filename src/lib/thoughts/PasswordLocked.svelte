<script>
	import { isAuthenticated } from '$lib/thoughts/store.js';
	import { passwordStore } from '$lib/thoughts/store.js';
	import { onMount } from 'svelte';
	import API from '$lib/thoughts/api.js';
	
	// Subscribe to stores
	$: authenticated = $isAuthenticated;
	$: password = $passwordStore;

	let passwordInput
	let api

	onMount (() => {
		api = new API()
		passwordInput.focus()
	});
	
	async function tryAuth() {
		passwordInput.disabled = true;	
		authenticated = await api.authenticate(password);
		if (authenticated === false) {
			alert("If you're not Simon please fuck off <3 (wrong password)");					
			passwordInput.value = "";
			passwordInput.disabled = false;
			passwordInput.focus();
		} else {
			passwordStore.set(password);
		}
		
	}

</script>

{#if authenticated === true}
	<slot></slot>
{:else}
<div class="pwContainer">
	<form on:submit|preventDefault={() => tryAuth()}>
		<input bind:value={password} bind:this={passwordInput} title="If you're not Simon please fuck off <3" placeholder="PASSWORD" type="password" name="password" id="password" class="passwordInput">
	</form>
</div>

{/if}

<style>
		.passwordInput::placeholder {
		font-family: Roboto;
	}
	
	.pwContainer {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	
	.passwordInput:focus-visible {
		outline: none;
	}
	
	.passwordInput {
		scale: 2;
		border-radius: 5vmin;
		border: 0.5vmin solid white;
		background-color: black;
		width: 20vw;
		color: white;
		font-size: max(3vw,16px);
		text-align: center;
	}

</style>