<template>
  <!--    
<header class="header">
        <ul class="nav-items">
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>      <nuxt-link to="/about">About</nuxt-link>

            </li>
            <li>      <nuxt-link to="/contact">Contact</nuxt-link>

            </li>
        </ul>
    </header>
    -->

  <cv-overflow-menu :label="label">
    <cv-overflow-menu-item primary-focus>
      <nuxt-link to="/">Home</nuxt-link>
    </cv-overflow-menu-item>
    <cv-overflow-menu-item>
      <nuxt-link to="/about">About</nuxt-link>
    </cv-overflow-menu-item>
    <cv-overflow-menu-item itemref="/contact">
      <nuxt-link to="/contact">Contact</nuxt-link>
    </cv-overflow-menu-item>
  </cv-overflow-menu>
</template>

<style scoped>
/*
.header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(211, 112, 236);
}

.nav-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
}

.nav-items a {
    text-decoration: none;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.nav-items a:hover,
.nav-items a:active {
    color: white;
}

*/
</style>

<script>
export default {
  data() {
    return {
      label: "Home",
    };
  },
};
</script>