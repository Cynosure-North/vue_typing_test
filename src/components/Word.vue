<template>
	<div class="word" ref="ref">
		<Letter
			v-for="(char, i) in word"
			:key="i"
			:char="char"
			:color="getColor(getLetterStatus(char, i))" />
		<Letter
			v-for="(char, i) in suffix"
			:key="'s' + i"
			:char="char"
			:color="getColor('incorrect')" />

		<Caret v-if="wordStatus === 'active'" :offset="typedWord?.length || 0" />
	</div>
</template>

<script setup lang="ts">
	import { computed, nextTick, onUpdated, useTemplateRef } from 'vue';
	import Letter from './Letter.vue';
	import Caret from './Caret.vue';

	const props = defineProps({
		word: {
			type: String,
			required: true
		},
		typedWord: {
			type: String,
			required: true
		},
		wordStatus: {
			type: String,
			required: true
		} });
	const ref = useTemplateRef('ref');
	
	type LetterStatus = "passive" | "active" | "incorrect" | "correct";
	
	const suffix = computed(() => {
		return props.typedWord.slice(props.word.length)
	})
	const underline = computed(() => {
		if (props.wordStatus === 'incorrect') return getColor('incorrect') + ' solid 0.1lh'
		return 'transparent solid 0.1lh'
	})

	const getLetterStatus = (char: string, i: number): LetterStatus => {
		if (props.typedWord.charAt(i) === char) return "correct";	// Has it been typed, and it it correct
		else if (props.typedWord.charAt(i) != "") return "incorrect";		// Has it been typed
		else if (props.wordStatus === 'active') return 'active';	// Is the cursor in the current word
		return "passive";
	}


	const getColor = (status: LetterStatus) => {
		switch(status) {
			case "passive": return "#ccc";
			case "active": return "#777";
			case "correct": return "#000";
			case "incorrect": return "red"
		}
	}


	onUpdated(async() => {
		if (props.wordStatus === "active") {
			await nextTick();
			ref.value?.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	})
</script>


<style scoped>
	.word {
		display: flex;
		margin: 0.15lh 0.2em;
		position: relative;
		border-bottom: v-bind(underline);
	}
</style>