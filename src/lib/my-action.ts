import type { Action } from 'svelte/action'

export const myAction: Action<HTMLParagraphElement, number> = (node, length = 100) => {
	if (node.innerText.length > length) {
		node.innerText = node.innerText.substring(0, length - 3) + '...'
	}
}
