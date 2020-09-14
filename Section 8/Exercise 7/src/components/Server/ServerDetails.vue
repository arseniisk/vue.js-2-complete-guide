<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server #{{ server.id }}</p>
    <p>Status: {{ server.status }}</p>
    <button @click="resetStatus">Reset Status</button>
  </div>
</template>

<script>
import { eventBus } from '../../main';
export default {
  data() {
    return {
      server: {}
    };
  },
  created() {
    eventBus.$on('selected-server', data => {
      this.server = data;
    });
  },
  methods: {
    resetStatus() {
      eventBus.$emit('reset-server-status', this.server);
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
