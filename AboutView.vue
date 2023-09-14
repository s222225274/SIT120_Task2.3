<template>
  <div class="about">
    <h1>This page contains all the other missing elements that I was not able to put in the 'HomeView' file.</h1>
 
    <!-- 1. Template Syntax -->
    <p>1. Template Syntax:</p>
    <p>{{ message }}</p>

    <!-- b. Raw HTML [v-html] -->
    <div v-html="rawHTML"></div>

    <!-- c. Attribute Bindings [v-bind:id] -->
    <button :id="buttonId">Click me</button>

    <!-- 3. Reactivity Fundamentals -->
    <p>3. Reactivity Fundamentals:</p>
    <p>Counter: {{ counter }}</p>

   <!-- 6. List Rendering -->
   <p>6. List Rendering:</p>
    <ul>
      <!-- a. v-for with an Object -->
      <li v-for="(value, key) in user" :key="key">
        {{ key }}: {{ value }}
      </li>

      <!-- b. v-for with a Range -->
      <li v-for="n in 5" :key="n">{{ n }}</li>

      <!-- c. v-for on <template> -->
      <template><div v-for="item in items">
        <li :key="item.id">{{ item.name }}</li></div>
      </template>

      <!-- d. v-for with v-if -->
      <li v-for="item in filteredItems" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  
    <!-- Form Input Bindings -->
    <p>Form Input Bindings:</p>
    <!-- a. v-model with <input type="text">, <input type="checkbox">, <input type="radio">, <select> and <textarea> -->
    <input type="text" v-model="textInput" />
    <input type="checkbox" v-model="checkboxInput" />
    <input type="radio" value="option1" v-model="radioInput" />
    <input type="radio" value="option2" v-model="radioInput" />
    <select v-model="selectedOption">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
    <textarea v-model="textareaInput"></textarea>

    <!-- b. v-model modifiers [.lazy , .number, .trim] -->
    <input type="text" v-model.lazy="lazyInput" />
    <input type="text" v-model.number="numericInput" />
    <input type="text" v-model.trim="trimmedInput" />

    <!-- 9. Watchers -->
    <p>9. Watchers:</p>
    <p>Watched Property: {{ watchedProperty }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

// Data properties
const message = 'Hello, Vue 3!';
const rawHTML = '<strong>Rendered as raw HTML</strong>';
const buttonId = 'my-button';

// Reactivity Fundamentals
const counter = ref(0);

// List Rendering
const user = { name: 'John', age: 30, email: 'john@example.com' };
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];
const filteredItems = computed(() => items.filter(item => item.id !== 2));

// Form Input Bindings
const textInput = ref('');
const checkboxInput = ref(false);
const radioInput = ref('');
const selectedOption = ref('');
const textareaInput = ref('');

// v-model modifiers
const lazyInput = ref('');
const numericInput = ref(0);
const trimmedInput = ref('');

// Watchers
const watchedProperty = ref('Initial Value');
watch(watchedProperty, (newValue, oldValue) => {
  console.log(`Watched property changed from "${oldValue}" to "${newValue}"`);
});
</script>


<style scoped>
/* Scoped CSS styles specific to this component */
.about {
  background-color: #f5f5f5;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}

input[type="text"],
input[type="checkbox"],
input[type="radio"],
select,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}


</style>
