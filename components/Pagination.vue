<template>
  <!-- :backward-text="backwardText" -->
  <!-- :forward-text="forwardText" -->
  <cv-pagination
    v-if="!searchData.skltOn"
    :page-number-label="pageNumberLabel"
    :page-sizes-label="pageSizesLabel"
    :number-of-items="this.searchData.searchHits"
    :page="page"
    :page-sizes="pageSizes"
    @change="onChange"  >
    <!-- :backwards-button-disabled="disableBackwards"
    :forwards-button-disabled="disabledForwards" -->
  </cv-pagination>
</template>

<script>
export default {
  name: "PaginationPanel",
  props: {
    searchData: Object,
    // disableBackwards: Boolean,
    // disabledForwards: Boolean,
    // page: Number,
    // pageSizesLabel: String,
    // backwardText: String,
    // forwardText: String
  },

  data() {
    return {
      pageSizes: [10, 20, 50],
      pageNumberLabel: "Pgs",
      // disableBackwards: true,
      // disabledForwards: false,
      pageSizesLabel: "Results per page",
      //   forwardText: "Next"
      //   backwardText: "<<",
      page: 1,
      pageNumberLabel: "Pg",
      prevStart: 1,
      prevLength: 10,
    };
  },
  methods: {
    onChange(data) {
      console.log("Pagination  Changed:", data, this.searchData);

      if ((data.start === this.prevStart && data.length == this.prevLength) || this.searchData.errorOccurred){
        return; // do nothing, default event on render
      }

      this.$elastic.queryElastic(this.searchData, data.start - 1, data.length);

      this.prevStart = data.start;
      this.prevLength = data.length;
    },
  },
};
</script>