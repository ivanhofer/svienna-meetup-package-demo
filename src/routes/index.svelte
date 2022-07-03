<script lang="ts">
	import { myAction } from '../lib/my-action'
	import Button from '../lib/Button.svelte'
	import { onMount } from 'svelte'

	let loading = false

	onMount(() => {
		const interval = setInterval(() => (loading = !loading), 3000)

		return () => clearInterval(interval)
	})
</script>

<Button {loading} type="submit">submit form</Button>

<hr />

<p use:myAction={20}>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem eos assumenda laboriosam optio
	nesciunt, nulla odit corrupti eaque a et praesentium ipsam culpa alias voluptatem quaerat delectus! Repellendus,
	fugit ad voluptate, distinctio iste molestias, numquam corporis quasi quam eius consequuntur porro vitae! Ipsa iusto
	veritatis aperiam quas debitis cumque! Nobis reiciendis facere perspiciatis expedita aliquid, aliquam et consequatur
	eligendi neque dolor voluptatum autem nulla nemo pariatur sunt sequi accusamus labore error laudantium. Odio, magnam.
	Id, nihil. Quaerat facere enim dicta reprehenderit quos aliquam. Incidunt assumenda ea, consequuntur nemo ratione
	aspernatur doloribus consequatur, ducimus voluptate debitis asperiores magni quos nisi!
</p>

<style lang="scss">
	hr {
		border-color: $my-color;
	}
</style>
