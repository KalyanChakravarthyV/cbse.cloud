<template>
  <cv-header aria-label="Carbon header">
    <cv-header-menu-button aria-label="Header menu" aria-controls="side-nav" @mousedown="onClick()"/>
    <cv-skip-to-content href="#main-content">
      Skip to content
    </cv-skip-to-content>
    <cv-header-name href="/" prefix="">CBSE.CLOUD
    </cv-header-name>
    <cv-header-nav aria-label="Carbon nav">
      <cv-header-menu-item href="/about">About </cv-header-menu-item>
      <cv-header-menu-item href="/contact">Contact </cv-header-menu-item>
    </cv-header-nav>

    <template v-slot:left-panels v-if="areLeftPanels">
      <cv-side-nav id="side-nav" rail>
        <cv-side-nav-items>
          <cv-side-nav-link href="/about">About
          </cv-side-nav-link>
          <cv-side-nav-link href="/contact">Contact
          </cv-side-nav-link>
        </cv-side-nav-items>
      </cv-side-nav>
    </template>
  </cv-header>
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
        flipMenu: false,
        up: false,
        areLeftPanels : false,
        offset: {
          left: 0,
          top: 0,
        },
        label: "Menu",
        tipPosition: "right",
        tipAlignment: "center",
      };
    },
    methods: {

      onClick(){
        this.areLeftPanels = !this.areLeftPanels;
        console.log("Burger menu clicked!");
      },

      navigate(data) {
        console.log(data);
      },
    },
  };
  </script>
