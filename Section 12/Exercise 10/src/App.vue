<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <h1 v-myon:click="transformBox">
          Directives Exercise
        </h1>
        <h1 v-myon:click="uppercase">
          Directives Exercise
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  directives: {
    myon: {
      bind(el, binding, vnode) {
        if (binding.arg == 'click') {
          binding.value(el);
        }
      },
    },
  },
  methods: {
    transformBox(el) {
      el.style.border = '2px solid orange';
      el.style.padding = '10px';
      el.style.backgroundColor = 'grey';
      el.style.color = 'orange';
    },
    uppercase(el) {
      el.style.textTransform = 'uppercase';
    },
  },
};
</script>

<style></style>
