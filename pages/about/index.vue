<template>
  <div class="margin: 6px">
    <h3>About cbse.cloud</h3> 

    <p>
      An open-source, always free-to-use platform making textbooks searchable</p>
    <br><br>
  <h5>Powered by:</h5>
  <p>
  <ul>
    <li><a href="https://netlify.app">Netlify</a></li>
    <li><a href="https://carbondesignsystem.com" target="_blank">IBM Carbon Design System with VueJS (NuxtJS)</a></li>
    <li><a href="https://elastic.co" target="_blank">Elasticsearch</a></li>
    <li><a href="https://oci.com" target="_blank">Oracle Cloud Infrastracture</a></li>

  </ul>
  </p>

</div>

</template>

<script>
export default {
  validate(data) {
    return true
  }
};
</script>

<style lang="css" scoped>
div {
  margin: 6px;
}
p {
  margin: 3px;
}
</style>