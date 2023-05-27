<template>
  <!-- width: 300px;-->

  <div style="margin:6px; padding: 10px;">


    <cv-data-table-skeleton   :columns="skeletonColumns "  v-if="skeleton"></cv-data-table-skeleton>


    <cv-data-table  ref="table"   :zebra="true">
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
    skeleton: Boolean
  },

  data() {
    return {
      
      skeletonColumns: ['Searching...'
      ],
      data: []
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
  