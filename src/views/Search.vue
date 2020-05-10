<template>
  <div id="search">
    <b-container>
      <search-form @render:table="handleTable" />
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
// import axios from "axios";

var url = "https://en.wikipedia.org/w/api.php";

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
    async handleTable(results, query) {
      var params = {
        action: "query",
        list: "search",
        srsearch: query,
        format: "json"
      };

      url = url + "?origin=*";
      Object.keys(params).forEach(function(key) {
        url += "&" + key + "=" + params[key];
      });

      var resultados = [];
      await fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          resultados = response.query.search;
        })
        .catch(function(error) {
          console.log(error);
        });

      this.results = resultados;
      this.query = query;
      this.query_results = true;
    }
  }
};
</script>
