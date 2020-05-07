<template>
  <div id="search">
    <b-container>
      <search-form @render:table="handleTable" />
      <br />
      <search-results :results="results" :query="query" />
    </b-container>
  </div>
</template>
<script>
import SearchForm from "@/components/SearchForm.vue";
import SearchResults from "@/components/SearchResults.vue";

export default {
  name: "search",
  data() {
    return {
      results: [],
      query: ""
    };
  },
  components: {
    SearchForm,
    SearchResults
  },
  methods: {
    handleTable(results, query) {
      this.results = this.results.concat(results);
      this.query = this.query + query;
    }
  }
};
</script>
