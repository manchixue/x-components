<template>
	<button class="x-button" :class="btnCls">
		<x-icon class="x-button-icon" :icon="icon" v-if="icon"></x-icon>
		<span v-if="$slots.default">
			<slot></slot>
		</span>
	</button>
</template>

<script>
	import XIcon from './icon.vue';

	export default {
		name: "x-button",
		props: {
			type: {
				type: String,
				default: '',
				validator (type) {
					const typeList = ['success', 'warning', 'danger', 'primary', 'info'];
					if (type && !typeList.includes(type)) {
						console.warn(`button的type需要为${typeList.join('、')}中的一项`);
					}

					return true;
				}
			},
			icon: {
				type: String,
				default: ''
			}
		},
		components: {
			XIcon
		},
		data () {
			return {};
		},
		computed: {
			btnCls () {
				let classes = [];

				if (this.type) {
					classes.push(`x-button-${this.type}`);
				}

				return classes;
			}
		},
		methods: {}
	}
</script>

<style lang="scss">
	@import "../styles/var.scss";

	$height: 42px;
	$font-size: 16px;
	$color: #606266;
	$border-color: #dcdfe6;
	$background: #ecf5ff;
	$active-color: #3a8ee6;
	.x-button {
		border-radius: $border-radius;
		border: 1px solid $border-color;
		height: $height;
		font-size: $font-size;
		cursor: pointer;
		line-height: 1;
		padding: 12px 20px;
		display: inline-flex;
		justify-content: center;
		vertical-align: middle;
		user-select: none;

		&:hover {
			border-color: $border-color;
			background-color: $background;
		}

		&:focus, &:active {
			color: $active-color;
			border-color: $background;
			background-color: $background;
			outline: none;
		}

		@each $type, $color, $activeColor, $hoverColor in (
			primary $primary $primary-active $primary-hover,
			warning $warning $warning-active $warning-hover,
			danger $danger $danger-active $danger-hover,
			success $success $success-active $success-hover,
			info $info $info-active $info-hover
	) {
			&-#{$type} {
				color: #fff;
				border: 1px solid #{$color};
				background-color: #{$color};

				&:hover {
					color: #fff;
					border-color: #{$hoverColor};
					background-color: #{$hoverColor};
				}

				&:active, &:focus {
					color: #fff;
					border-color: #{$activeColor};
					background-color: #{$activeColor};
				}
			}
		}

		&-icon {
			width: 16px;
			fill: #fff;
			color: #fff;
			& + * {
				margin-left: 4px;
			}
		}
	}
</style>
