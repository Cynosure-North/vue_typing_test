import TypingTest from './components/TypingTest.vue'
import { defineCustomElement } from 'vue'

// Convert the SFC to a custom element constructor
const CustomElementConstructor = defineCustomElement(TypingTest)
// Register the custom element
customElements.define('typing-test', CustomElementConstructor)