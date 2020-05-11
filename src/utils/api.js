import axios from "axios";
var baseURL = "https://en.wikipedia.org/w/api.php";

export default {
  urlFormatting(query) {
    var params = {
      action: "query",
      list: "search",
      srsearch: query,
      format: "json"
    };

    baseURL = baseURL + "?origin=*";
    Object.keys(params).forEach(function(key) {
      baseURL += "&" + key + "=" + params[key];
    });
  },

  getSearch() {
    return axios.get(baseURL);
  }
};
