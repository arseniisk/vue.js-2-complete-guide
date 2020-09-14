<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <Server v-for="index in 5" :key="index"></Server>
      </ul>
    </div>
    <ServerDetails></ServerDetails>
  </div>
</template>

<script>
import ServerDetails from './ServerDetails.vue';
import Server from './Server.vue';

export default {
  components: {
    Server,
    ServerDetails
  }
};
</script>
