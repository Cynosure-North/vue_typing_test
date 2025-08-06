import TypingTest from './components/TypingTest.vue'
import { createApp } from 'vue'

export { TypingTest }

if (import.meta.env.MODE === 'development') {
	const app = createApp(TypingTest, {text: ["this", "is", "for", "testing"]})

	app.mount('#app')
}