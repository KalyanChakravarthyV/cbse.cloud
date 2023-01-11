<template>
  <!--    
<header class="header">
        <ul class="nav-items">
            <li>
                <cv-link to="/">Home</cv-link>
            </li>
            <li>      <cv-link to="/about">About</cv-link>

            </li>
            <li>      <cv-link to="/contact">Contact</cv-link>

            </li>
        </ul>
    </header>
  <cv-overflow-menu
    :flip-menu="flipMenu"
    :up="up"
    :offset="offset"
    :label="label"
    :tip-position="tipPosition"
    :tip-alignment="tipAlignment"
  >
    <cv-overflow-menu-item primaryfocus>
      <cv-link to="/">Home</cv-link>
    </cv-overflow-menu-item>

    <cv-overflow-menu-item>
      <cv-link to="/about">About</cv-link>
    </cv-overflow-menu-item>
    <cv-overflow-menu-item>
      <cv-link to="/contact">Contact</cv-link>
    </cv-overflow-menu-item>
  </cv-overflow-menu>

    -->

    <cv-overflow-menu :label="label">
    <cv-overflow-menu-item primary-focus>
      <cv-link to="/">Home</cv-link>
    </cv-overflow-menu-item>
    <cv-overflow-menu-item >
      <cv-link to="/about"  > About</cv-link>
    </cv-overflow-menu-item>
    <cv-overflow-menu-item>
      <cv-link to="/contact">Contact</cv-link>
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
      "flipMenu": false,
      "up": false,
      "offset": {
        "left": 0,
        "top": 0
      },
      "label": "Oveflow menu",
      "tipPosition": "right",
      "tipAlignment": "center"
    };
  },
  methods: {

    navigate(data) {
      console.log(data)
    }

  }
};
</script>