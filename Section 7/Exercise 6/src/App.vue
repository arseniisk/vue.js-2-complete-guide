<template>
  <div class="container">
    <Header></Header>
    <hr />
    <Servers></Servers>
    <hr />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header.vue';
import Servers from './Servers.vue';
import Footer from './Footer.vue';

export default {
  components: {
    Header,
    Servers,
    Footer
  }
};
</script>

<style></style>
