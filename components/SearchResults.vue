<template>
  <!-- width: 300px;-->

  <div style="margin:6px; padding: 10px;">
    <!-- <cv-data-table
      :title="title"
      :columns="columns"
      :data="searchResults"
      :pagination="basicPagination"
      :overflow-menu="true"
      ref="table"
      :hidden="visible"
      use_htmlData="true"
      >{{ msg }}</cv-data-table
    > -->



    <cv-data-table :pagination="basicPagination" ref="table"   :zebra="true">
      <template  slot="data">
        <cv-data-table-row
          v-for="(row, rowIndex) in searchResults"
          :key="`${rowIndex}`"  >
        <div>
          <!-- <cv-skeleton-text></cv-skeleton-text> -->
          <cv-tile :zebra="true">
              <h4>{{row[0]}} - {{row[1]}}</h4>

        <cv-link style="padding:6px; color: #123;"
              :href="row[3]"
              target="_blank"
              v-html="row[2]"
            ></cv-link>
          </cv-tile>
    </div>
          <!-- <cv-data-table-cell v-for="(cell, cellIndex) in row" :key="`${cellIndex}`" :value="`${cellIndex}`" v-html="cell"></cv-data-table-cell> -->
        </cv-data-table-row>
      </template>
    </cv-data-table>
  </div>
</template>
  
  <script>
export default {
  name: "SearchResults",
  props: {
    msg: String,
    searchResults: Array,
  },

  data() {
    return {
      title: "Search Results",
      visible: false,
      basicPagination: false,
      columns: ["Class/Grade", "Subject", "Highlights", "URL"],
    };
  },
  methods: {
    actionSelected(data) {
      console.log(data);
    },

    onSubmit() {},
  },
};
</script>
  