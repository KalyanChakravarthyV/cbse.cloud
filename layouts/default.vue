<template>
  <div>
  <!-- <div class="cbse"> -->
    <Header />
    <nuxt/>
  </div>
</template>

<script>
import Header from '@/components/Header'


export default {
  components: {
    Header
  }
}
</script>


<style>

.cbse{
  /* background-color: grey;
   */
      background-color: rgb(213, 128, 235);

}
.cbse-p{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: small;
}
</style>
