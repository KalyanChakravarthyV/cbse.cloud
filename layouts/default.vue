<template>
  <div>
  <!-- <div class="cbse"> -->
    <Header />
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default {
  components: {
    Header,Footer
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
