

export default function({ app: { router }, $config: { posthogPublicKey } }, inject) {

  let elClientWrapper = {"elClient" : {
     getElasticSearchQuery(qString,start,length) {
      let query = {

        from: start,
        size: length,
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

      console.log 
      return JSON.stringify(query);
    },
    queryElastic(searchData, start, length){

      searchData.searchResults.length = 0;

      console.log("Searching:",searchData.sQ, start, length);

      fetch("https://elastic.cbse.cloud/ncert/_search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: this.getElasticSearchQuery(searchData.sQ, start, length),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            let msg = `Error with Elastic, returned e '${response.status}:${response.statusText}'` + JSON.stringify(searchData);
            console.error(msg);
            searchData.errorOccurred = true;

            this.$posthog.capture(msg);

          }
        })
        .then((response) => {
          searchData.searchHits = response.hits.total.value;
          response.hits.hits.forEach((element) => {
            searchData.searchResults.push([
              element.fields.class[0],
              element.fields.subjectName[0] + "-" + element.fields.chapter[0],
              element.highlight.data.join("...<br/>") + "...",
              element.fields.pdfUrl[0] +
                "#page=" +
                element.fields.pageNumber[0],
            ]);
          });

          searchData.skltOn = false;
        })
        .catch((err) => {
          console.log(err);
          searchData.errorOccurred = true;
          searchData.skltOn = false;
        });

    }
  }};
  
  inject('elastic', elClientWrapper.elClient);

}
