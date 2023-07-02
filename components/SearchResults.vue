<template>
  <div style="margin: 6px; padding: 10px">
    <!-- <cv-tag
      filter
      @remove="clearFilter({ searchData })"
      @click="actionSelected({ searchData })"
      :label="JSON.stringify({sQ:searchData.sQ, skltOn:searchData.skltOn})"
    /> -->

    <p v-if="searchData.skltOn" style="font-size: small">Searching for `{{ searchData.sQ }}`<br /></p>

    <p v-if="!searchData.skltOn && searchData.searchResults.length > 0"  style="font-size: small">
      Found {{ searchData.searchHits }} results for `{{ searchData.searchedQ }}`<br />
    </p>

    <p v-if="!searchData.skltOn && searchData.searchResults.length == 0 && searchData.searchedQ "  style="font-size: small">
       No results found for `{{ searchData.searchedQ }}`<br />
    </p>

    <p v-if="searchData.errorOccurred"  style="font-size: small">
      Error! Could not search for `{{ searchData.searchedQ }}`<br />
    </p>
    <cv-data-table ref="skeletonTable" :zebra="true" v-if="searchData.skltOn">
      <template slot="data">
        <cv-data-table-row
          v-for="(row, rowIndex) in this.skeletonResults"
          :key="`${rowIndex}`"
        >
          <cv-skeleton-text :paragraph="true" :line-count="5">
          </cv-skeleton-text
        ></cv-data-table-row>
      </template>
    </cv-data-table>

    <Pagination :searchData="this.searchData"  v-if="!searchData.skltOn && searchData.searchResults.length > 0"/>

    <cv-data-table ref="table" :zebra="true">
      <template slot="data">
        <cv-data-table-row
          v-for="(row, rowIndex) in searchData.searchResults"
          :key="`${rowIndex}`"
        >
          <div>
            <cv-tile :zebra="true">
              <h4>{{ row[0] }} - {{ row[1] }}</h4>

              <cv-link
                style="padding: 6px; color: #123"
                :href="row[3]"
                target="_blank"
                ><p v-html="row[2]"></p
              ></cv-link>
            </cv-tile>
          </div>
        </cv-data-table-row>
      </template>
    </cv-data-table>

    <!-- <Pagination :searchData="this.searchData"/> -->
  </div>
</template>

<script>
export default {
  name: "SearchResults",
  props: {
    searchData: Object,
  },

  data() {
    return {
      // skeletonColumns: ["Searching..."],
      data: [],
      skeletonData: [],
      skeletonResults: [{}, {}, {}, {}, {}],

    };
  },
  methods: {
    actionSelected(data) {
      console.log(data);
    },

    clearFilter(data) {
      console.log("Filter Cleared:", data.searchData.sQ);
    }
  },
};
</script>
  