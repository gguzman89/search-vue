<template>
  <div id="search-form">
    <div>
      <b-form @submit.prevent="handleSubmit" inline>
        <b-input
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Search"
          v-model="query"
        ></b-input>
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
      results: [
        {
          nro:
            "Marshall Islands prohibit the importation, manufacturing, sale and distribution of styrofoam cups and plates, disposable plastic cups and plates, and plastic shopping bags."
        },
        {
          nro:
            "Marshall Islands prohibit the importation, manufacturing, sale and distribution of styrofoam cups and plates, disposable plastic cups and plates, and plastic shopping bags22."
        },
        {
          nro: "Disposable Foam Container Toolkit – NRCM"
        },
        {
          nro:
            "Disposable Foam Container Toolkit by Natural Resources Council of Maine"
        },
        {
          nro: "Disposable Foam Container Toolkit – NRCM322"
        }
      ]
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("render:table", this.results, this.query);
      this.results = [];
    }
  }
};
</script>
