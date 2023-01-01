<template>
  <!-- width: 300px;-->

  <div style="margin: 6px; padding: 10px">
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
    

    <cv-data-table
      :columns="columns"
      :pagination="basicPagination"
      ref="table"
    >
      <template v-if="use_htmlData" slot="data">
        <cv-data-table-row
          v-for="(row, rowIndex) in searchResults"
          :key="`${rowIndex}`"
          :value="`${row}`"
        >

        <cv-data-table-cell v-for="(cell, cellIndex) in row" :key="`${cellIndex}`" :value="`${cellIndex}`" v-html="cell"></cv-data-table-cell>

        
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
      use_htmlData: true,
      basicPagination: false,
      columns: [
        "Class/Grade",
        "Subject",
        "Chapter",
        "Highlights",
        "URL",
      ],
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
  