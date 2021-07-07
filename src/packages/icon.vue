<template>
	<svg class="x-icon" aria-hidden="true">
		<use :xlink:href="`#icon-${icon}`"></use>
	</svg>
</template>

<script>
	import '../styles/icon';
	export default {
		props: {
			icon: {
				type: String,
				required: true
			}
		},
		name: "x-icon",
		data () {
			return {};
		},
		methods: {}
	}
</script>

<style lang="scss">
	.x-icon {
		width: 25px;
		height: 16px;
		vertical-align: middle;
	}
</style>
