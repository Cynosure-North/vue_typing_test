<template>
	<div class="wordSet">
	<Word
		v-for="(word, i) in wordList"
		:key="word + i"
		:word="word"
		:typedWord="typedWordList[i] || ''"
		:wordStatus="getWordStatus(word, i)" />
	</div>
</template>

<script setup lang="ts">
	import Word from './Word.vue';

	type WordStatus = "passive" | "active" | "incorrect" | "correct";

	const props = defineProps({
		wordList: {
			type: Array<string>,
			required: true
		},
		typedWordList: {
			type: Array<string>,
			required: true
		},
		activeWordIndex: {
			type: Number,
			required: true,
		} });

	const getWordStatus = (word: string, i: number): WordStatus => {
		if (props.activeWordIndex === i) return "active"
		else if (props.activeWordIndex > i) {
			if (props.typedWordList[i] !== word) {
				return "incorrect";
			} else {
				return "correct";
			}
		}
		return "passive";
	};
</script>

<style scoped>
	.wordSet {
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		user-select: none;
	}
</style>