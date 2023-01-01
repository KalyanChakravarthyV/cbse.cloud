<template>
  <div class="margin: 6px">
    <h3>About cbse.cloud</h3> 

    <p>
      An open-source, always free-to-use platform making textbooks searchable</p>
    <br><br>
  <h5>Powered by:</h5>
  <p>
  <ul>
    <li>IBM Carbon Design System with VueJS (NuxtJS)</li>
    <li>Elasticsearch</li>
    <li>Oracle Cloud Infrastracture</li>

  </ul>
  </p>

</div>

</template>

<script>
export default {
  validate(data) {

    // console.log("data that has come to this page: ")
    // console.log(data.id)
    console.log(data)

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