<template>
	<div :style="{color: color}">{{char}}</div>
</template>

<script setup lang="ts">
	defineProps({
		char: String,
		color: String })
</script>