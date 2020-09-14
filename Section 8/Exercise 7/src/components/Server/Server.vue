<template>
  <li class="list-group-item">
    Server #{{ server.id }}
    <button style="float:right" @click="selectServer">
      View
    </button>
  </li>
</template>

<script>
import { eventBus } from '../../main';

export default {
  props: {
    server: Object
  },
  data() {
    return {};
  },
  methods: {
    selectServer() {
      eventBus.$emit('selected-server', this.server);
    }
  },
  created() {
    eventBus.$on('reset-server-status', data => {
      if (data.id === this.server.id) {
        this.server.status = 'Normal';
      }
    });
  }
};
</script>

<style scoped></style>
