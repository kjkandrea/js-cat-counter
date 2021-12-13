import { writable } from 'svelte/store'

export const count = writable(0);
export const increment = () => count.update(count => ++count)
export const decrement = () => count.update(count => count >= 1 ? --count : count)