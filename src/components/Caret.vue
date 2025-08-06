<template>
	<div className="caret" :style="{ left: offset + 'ch'}"></div>
</template>

<script setup>
	defineProps({
		offset: Number
	})
</script>

<style scoped>
	.caret {
		position: absolute;
		width: 0.10em;
		height: 1lh;
		border-radius: 0.05em;
		background-color: #000;
		transition: left 0.08s;
		animation-name: blink;
		animation-duration: 0.8s;
		animation-iteration-count: infinite;
		animation-timing-function: steps(2, jump-both);
	}

	@keyframes blink {
		from {
			opacity: 0.9;
		}

		to {
			opacity: 0.2;
		}
	}
</style>