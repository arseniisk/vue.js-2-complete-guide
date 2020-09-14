<template>
  <div>
    <div class="form-group">
      <label for="first-name">First Name</label>
      <input
        type="text"
        id="first-name"
        class="form-control"
        v-model="firstName"
        @change="updateInput"
      />
    </div>
    <div class="form-group">
      <label for="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        class="form-control"
        v-model="lastName"
        @change="updateInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    updateInput() {
      const fullName = this.firstName + ' ' + this.lastName;
      this.$emit('input', fullName);
    }
  },
  data() {
    return {
      firstName: '',
      lastName: ''
    };
  }
};
</script>

<style scoped></style>
