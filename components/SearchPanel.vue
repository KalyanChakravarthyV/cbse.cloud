<template>
  <div>
    <!-- <cv-skeleton-text
      :heading="heading"
      :paragraph="paragraph"
      :line-count="lineCount"
      :width="width"
    > -->

    <p style="font-size: medium">
      Welcome to cbse.cloud, the ultimate destination for students and teachers
      looking for enhanced search abilities of digital copies of NCERT syllabus
      CBSE books. Our website provides easy access to government-provided
      digital books with added search capabilities based on topic, grade, and
      subject.
    </p>
    <br/>
    <div class="search_box">
     
            <cv-search
              label=""
              v-model="searchData.sQ"
              placeholder="Class X Trigonometry"
              @keyup.enter="onClick()"
            ></cv-search>
            <!-- <cv-button @click="onClick">Go!</cv-button> <br/> -->

            <div class="bx--content">
            <SearchResults :searchData="this.searchData" />

            <br/>        
            <!-- <cv-tag
              filter
              @remove="clearFilter({ searchData })"
              @click="actionSelected({ searchData })"
              :label="this.searchData.sQ"
            ></cv-tag>  -->
          </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPanel",
  data() {
    return {
      searchData: {
        sQ: "",
        searchedQ: "",
        visible: false,
        searchResults: [],
        skltOn: false,
        searchHits: 0,
        errorOccurred: false
      },
      responseAvailable : false
    };
  },
  methods: {

    onClick() {
      this.searchData.visible = true;
      this.search();
    },
    search() {
      this.$posthog.capture(`searched '${this.searchData.sQ}'`, { searchString: this.searchData.sQ });
      this.responseAvailable = false;
      this.searchData.searchResults = [];
      this.searchData.skltOn = true;
      //the initial index 0 and length of 10, ideally this should be the first element from pagination sizes
      this.$elastic.queryElastic(this.searchData, 0, 10);
      this.searchData.searchedQ = this.searchData.sQ;
      // this.searchData.skltOn = false;

    },
  },
};
</script>

<style>
.search_box {
  display: inline;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15% auto;
}

.cv-text-input {
  margin: 30px 0;
}
</style>
