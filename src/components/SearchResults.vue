<template>
  <div id="search-results">
    <b-tabs v-if="results.length > 0" content-class="mt-3">
      <b-tab>
        <template v-slot:title>
          Found {{ results.length }} matches to "<i>{{ query }}</i
          >"
        </template>
        <table>
          <tbody>
            <tr v-for="result in results" :key="result.title">
              <b-card>
                <b-card-text>
                  <a href="/search" class="card-link">{{ result.title }}</a>
                </b-card-text>
              </b-card>
            </tr>
          </tbody>
        </table>
      </b-tab>
    </b-tabs>
    <!-- <b-tabs v-show="results.length == 0" content-class="mt-3">
      <b-tab title="Found 0 results"></b-tab>
    </b-tabs>-->
  </div>
</template>
<script>
export default {
  name: "search-results",
  props: {
    results: Array,
    query: String
  }
};
</script>
