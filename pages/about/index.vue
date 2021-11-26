<template>
  <div class="margin: 6px">
    <h3>About cbse.cloud</h3>

    <p>
      An open-source always free-to-use platform whose short-term goal is to
      make the CBSE(NCERT) textbooks searchable and a long-term vision of making
      education affordable to everyone
    </p>
    <br><br>
  <h4>Built On</h4>
  <p>
  <ul>
    <li>IBM Carbon Design System<li>
    <li>VueJS</li>
    <li>NuxtJS</li>
    
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
  margin: 21px;
}
p {
  margin: 3px;
}
</style>