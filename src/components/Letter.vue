<template>
	<div :style="{color: color}">{{char}}</div>
</template>

<script setup>
	defineProps({
		char: String,
		color: String })
</script>