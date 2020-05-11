<template>
  <div id="search">
    <b-container>
      <search-form @render:query="handleTable" />
      <br />
      <search-results
        :results="results"
        :query="query"
        :query_results="query_results"
      />
    </b-container>
  </div>
</template>
<script>
import SearchForm from "@/components/SearchForm.vue";
import SearchResults from "@/components/SearchResults.vue";
import API from "@/utils/api.js";

export default {
  name: "search",
  data() {
    return {
      results: [],
      query: "",
      query_results: false
    };
  },
  components: {
    SearchForm,
    SearchResults
  },
  methods: {
    async handleTable(query) {
      await API.urlFormatting(query);

      var results_response = [];

      let response = await API.getSearch();

      results_response = response.data.query.search;

      this.results = results_response;
      this.query = query;
      this.query_results = true;
    }
  }
};
</script>
