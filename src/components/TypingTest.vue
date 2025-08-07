<template>
	<div class="test" ref="typingTest"
		tabindex="0" @keydown="handleKeypress">
		<WordSet
			:wordList="text"
			:typedWordList="typedWordList"
			:activeWordIndex="activeWordIndex" />
	</div>
</template>

<script setup lang="ts">
	import { ref, useTemplateRef, onMounted } from 'vue';
	import WordSet from './WordSet.vue';

	const props = defineProps({
		text: {
			type: String,
			required: true,
		} });
	const emit = defineEmits(['results_ready']);

	const typingTest = useTemplateRef('typingTest');

	const text = props.text.split(" ");
	// State variables
	const typedWordList = ref<string[]>([""]);
	const activeWordIndex = ref(0);

	const results = ref<Object>({});
	const totalErrors = ref(0);
	const startTime = ref(-1); // -1: waiting, >0: typing, -2: complete
	const keyLog = ref<{ key: string; time: number }[]>([]);



	const handleKeypress = (e: KeyboardEvent) => {
		if (startTime.value === -2) {
			return;
		}

		e.preventDefault();

		const currWord = typedWordList.value[typedWordList.value.length - 1] || '';
		
		if (e.key === " ") {
			if (typedWordList.value.length !== text.length) {
				if (text[activeWordIndex.value]?.length !== currWord?.length) {
					totalErrors.value = totalErrors.value + ((text[activeWordIndex.value]?.length || 0) - currWord.length);
				}
				typedWordList.value = [...typedWordList.value, ""];
				activeWordIndex.value++;
				keyLog.value = [...keyLog.value, { key: "Space", time: Date.now() }];
			}
			return;
		}

		if (e.key === "Backspace") {
			if (e.ctrlKey) {
				if (activeWordIndex.value !== 0) {
					if (currWord?.length === 0) {
						typedWordList.value = [...typedWordList.value.slice(0, -2), ""];
						activeWordIndex.value--;
					} else {
						typedWordList.value = [...typedWordList.value.slice(0, -1), ""];
					}
				} else {
					typedWordList.value = [""];
				}
			} else {
				if (currWord?.length === 0) {
					if (activeWordIndex.value !== 0) {
						typedWordList.value = typedWordList.value.slice(0, -1);
						activeWordIndex.value--;
					}
				} else {
					let newTyped = typedWordList.value.slice(0, -1);
					newTyped.push(currWord?.slice(0, -1) || "");
					typedWordList.value = newTyped;
				}
			}
			keyLog.value = [...keyLog.value, { key: "Backspace", time: Date.now() }];
			return;
		}

		// Ignore anything that isn't a single text character
		if (e.key.match(/^[-a-zA-Z0-9!@#$%^&*()_+=[\]{};':",./<>?\\|`~]$/)) {
			if (startTime.value === -1) {
				startTime.value = Date.now();
			}

			const correctChar = text[activeWordIndex.value]?.charAt(currWord?.length || 0);
			if (e.key !== correctChar) {
				totalErrors.value++;
			}

			let newTyped = typedWordList.value.slice(0, -1);
			newTyped.push(currWord + e.key);
			typedWordList.value = newTyped;
			keyLog.value = [...keyLog.value, { key: e.key, time: Date.now() }];

			// If they've reached the end
			if (typedWordList.value.length === text.length && (currWord?.length || 0) === (text[activeWordIndex.value]?.length || 0) - 1) {
				const secondsTyping = (Date.now() - startTime.value) / 1000;
				startTime.value = -2; // Lock out any future changes

				const uncorrectedErrors = text.flatMap((word: String, wIndex: number) =>
					word.split("").map<number>((char, cIndex) =>
						(typedWordList.value[wIndex]?.charAt(cIndex) !== char) ? 1 : 0
					)
				).reduce((a: number, b: number) => a + b, 0);
				const correctedErrors = totalErrors.value - uncorrectedErrors;

				const wpm = text.length / (secondsTyping / 60);

				results.value = {
					time_taken: secondsTyping,
					uncorrected_errors: uncorrectedErrors,
					corrected_errors: correctedErrors,
					wpm: wpm,
					text_length: text.join('').length + (text.length - 1),
					keystroke_log: keyLog.value,
				};
				
				emit("results_ready", { results	: results.value });
				// console.log(results.value);
			}
		}
	};


	const getResults = async () => {
		if (results.value) {
			return results.value 
		}
		else {
			while (true) {
				await new Promise(resolve => setTimeout(resolve, 10_000));
				if (results.value) {
					return results
				}
			}
		}
	}
	defineExpose({getResults});


	onMounted(() => {
			typingTest.value?.focus();

		// TODO Prevent clicking out - NiceGUI handles this differently
		// For a NiceGUI custom component, user interaction within the component
		// is usually contained. You wouldn't need `window.parent.document.addEventListener`.
	});
</script>

<style scoped>
	.test {
		margin: 0 auto;
		height: 4.2lh;    /* Show 3 lines */
		overflow: hidden;
		outline: none;
		transition: color 0.5s ease;
		/* filter: blur(10px); */
		font-family: monospace;
		font-size: 24px;
	}

	.test:focus-within {
		filter: none;
	}
</style>