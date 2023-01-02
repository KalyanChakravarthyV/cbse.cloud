<template>
  
  <div style="margin: 6px; padding: 10px">
    <div class="search_box">
      <!-- <h1>Search through all of the books</h1> -->
      <cv-text-input
        label="Search"
        v-model="sQ"
        placeholder="for e.g: Trignometry" @keyup.enter="onClick()"
      />
      <cv-button @click="onClick">Go!</cv-button>
      <!-- <cv-modal :visible="visible" @modal-hidden="modalClosed">
      <template slot="title">Welcome to cbse.cloud</template>
      <template slot="content">
        <p>
          Our site is not ready yet{{
            sQ ? " but stay tuned to know more about '" + sQ + "'" : "!"
          }}
          .
        </p>
      </template>
    </cv-modal> -->

      <SearchResults :searchResults="searchResults" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPanel",
  data() {
    return {
      sQ: "",
      visible: false,
      searchResults: [],
    };
  },
  methods: {
    onClick() {
      this.visible = true;
      this.search();
    },
    modalClosed() {
      this.visible = false;
    },
    getElasticSearchQuery(qString) {
      let query = {
        query: {
          match: {
            data: {
              query: qString,
            },
          },
        },

        highlight: {
          pre_tags: ["<bold><em>"],
          post_tags: ["</em></bold>"],
          fields: {
            data: {},
          },
        },

        fields: [
          "classNum",
          "class",
          "pageNumber",
          "subjectName",
          "chapter",
          "pdfUrl",
        ],
        _source: false,
      };

      return JSON.stringify(query);
    },
    search() {
      this.$posthog.capture(`searched '${this.sQ}'`, { searchString: this.sQ })

      this.responseAvailable = false;

      this.searchResults = [];

      fetch("https://elastic.cbse.cloud/ncert/_search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: this.getElasticSearchQuery(this.sQ),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert(
              "Server returned " + response.status + " : " + response.statusText
            );
          }
        })
        .then((response) => {

          response.hits.hits.forEach((element) => {
            this.searchResults.push([
              element.fields.class[0],
              element.fields.subjectName[0] + "-" + element.fields.chapter[0],
              element.highlight.data.join("...<br/>") + "...",
              element.fields.pdfUrl[0] +
                "#page=" +
                element.fields.pageNumber[0],
            ]);
            console.log([
              element.fields.class[0],
              element.fields.subjectName[0],
              element.fields.chapter[0],
              element.fields.pageNumber[0],
              element.fields.pdfUrl[0],
            ]);
          });

          // this.result = response.body;
          // this.responseAvailable = true;
        })
        .catch((err) => {
          console.log(err);
        });
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
