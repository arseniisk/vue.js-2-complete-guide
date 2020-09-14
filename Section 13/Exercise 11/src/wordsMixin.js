export const wordsMixin = {
  data() {
    return {
      mixinText: 'Testing Mixin',
    };
  },
  computed: {
    mixinReversed() {
      return this.mixinText.split('').reverse().join('');
    },
    mixinWordCount() {
      return `${this.mixinText} (${this.mixinText.length})`;
    },
  },
};
