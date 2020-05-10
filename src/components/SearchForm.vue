<template>
  <div id="search-form">
    <div>
      <b-form @submit.prevent="handleSubmit" inline>
        <b-input
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Search"
          v-model="query"
        ></b-input>
        <span v-show="query" @click="removeSearchQuery" class="removeInput"
          >+</span
        >
        <b-button type="submit" variant="outline-primary">
          <b-icon icon="search"></b-icon>
        </b-button>
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "searche-form",
  data() {
    return {
      query: "",
      results: []
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("render:table", this.results, this.query);
      this.results = [];
    },

    removeSearchQuery() {
      this.query = "";
    }
  }
};
</script>
<style>
.removeInput {
  transform: rotate(45deg);
}
</style>
