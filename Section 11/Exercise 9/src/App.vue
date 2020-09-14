<template>
  <div class="container">
    <form v-if="!submitted">
      <div class="row" style="margin-top: 20px;">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <FullName v-model="userData.fullName"></FullName>
          <!-- <div class="form-group">
            <label for="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              class="form-control"
              v-model="userData.firstName"
            />
          </div>
          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              class="form-control"
              v-model="userData.lastName"
            />
          </div> -->
          <!-- Mail -->
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model="userData.email"
            />
          </div>
          <!-- Password -->
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model="userData.password"
            />
          </div>
          <!-- Store Data? Yes/No -->
          <div class="form-group">
            <label style="display:block;">
              Store Data?
            </label>
            <label for="store-data-yes">
              <input
                type="radio"
                id="store-data-yes"
                value="Yes"
                v-model="storeData"
              />
              Yes
            </label>
            <label for="store-data-no">
              <input
                type="radio"
                id="store-data-no"
                value="No"
                v-model="storeData"
              />
              No
            </label>
          </div>
          <div class="form-group text-right">
            <button class="btn btn-success" @click.prevent="submitForm">
              Submit
            </button>
          </div>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <div class="row" v-if="submitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ userData.fullName }} </p>
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Store in Database?: {{ storeData }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from './FullName.vue';
export default {
  data() {
    return {
      userData: {
        fullName: '',
        email: '',
        password: ''
      },
      storeData: null,
      submitted: false
    };
  },
  components: {
    FullName
  },
  methods: {
    submitForm() {
      this.submitted = true;
    }
  }
};
</script>

<style></style>
