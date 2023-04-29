<template>
  <div class="margin: 6px">
    <h3>About cbse.cloud</h3> 

    <p style="font-size: small;">
      An open-source, always free-to-use platform making textbooks searchable <br/><br/>

      <code>cbse.cloud</code> is a platform dedicated to providing students and teachers with easy access to 
      
       search capabilities of digital copies of NCERT syllabus CBSE books provided by the government.

Our team is passionate about education and strives to make learning accessible to everyone. We understand the importance of having access to the right resources, and we believe that by providing enhanced search capabilities, 
we can help students and teachers save time and find relevant material.

At cbse.cloud, we are committed to providing a user-friendly platform that is fast, reliable, and free. 
<!-- Our website is constantly updated to provide the latest study materials, and  -->
We are always looking for ways to improve our platform. 
<!-- Thank you for choosing cbse.cloud as your go-to platform for NCERT syllabus CBSE books. -->



    </p>
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
//import {v4 as uuid} from 'uuid'

export default {
  validate(data) {
    //console.log('uuid:'+uuid())
    return true;
  },
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