<template>

      <!-- :backward-text="backwardText" -->
    <!-- :forward-text="forwardText" -->
  <cv-pagination

    :page-number-label="pageNumberLabel"
    :page-sizes-label="pageSizesLabel"
    :number-of-items="this.searchData.searchHits"
    :page="page"
    :page-sizes="pageSizes"
    :backwards-button-disabled="disableBackwards"
    :forwards-button-disabled="disabledForwards"
    @change="onChange"
  >
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
      disableBackwards: true,
      disabledForwards: false,
      pageSizesLabel : "Results per page",
    //   forwardText: "Next"
    //   backwardText: "<<",
      page : 1,
      pageNumberLabel: "Pg"
    };
  },
  methods: {
    onChange(data) {
      console.log("Pagination  Changed:", data, this.searchData);

      this.$elastic.queryElastic(this.searchData, data.start, data.length);

    },
  },
};
</script>