// store.js
import { writable } from "svelte/store";

// Create a writable store for showContent
export const showContent = writable(false);