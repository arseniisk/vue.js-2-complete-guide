<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <h2>
          {{ text | reverse }}
        </h2>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <h2>
          {{ text | wordLength }}
        </h2>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <h2>
          {{ textReversed }}
        </h2>
        <h2>
          {{ textCount }}
        </h2>

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
				<h2>
          {{ mixinReversed }}
        </h2>
        <h2>
          {{ mixinWordCount }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { wordsMixin } from './wordsMixin.js';

export default {
  mixins: [wordsMixin],
  data() {
    return {
      text: 'Testing',
    };
  },
  filters: {
    reverse(value) {
      return value.split('').reverse().join('');
    },
  },
  computed: {
    textReversed() {
      return this.text.split('').reverse().join('');
    },
    textCount() {
      return `${this.text} (${this.text.length})`;
    },
  },
};
</script>

<style></style>
