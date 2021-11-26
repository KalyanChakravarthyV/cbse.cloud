<template>
  <div class="sample">
    <!-- <h1>Search through all of the books</h1> -->
    <cv-text-input
      label="Search"
      v-model="sQ"
      placeholder="for e.g: Trignometry"
    />
    <cv-button @click="onClick" >Go!</cv-button>
    <cv-modal :visible="visible" @modal-hidden="modalClosed">
      <template slot="title">Welcome to cbse.cloud</template>
      <template slot="content">
        <p>
          Our site is not ready yet{{sQ ? ' but stay tuned to know more about \''+sQ+'\'' : '!'}} .
        </p>
      </template>
    </cv-modal>
  </div>
</template>

<script>
  export default {
    name: 'SearchPanel',
    data() {
      return {
        sQ: '',
        visible: false,
      };
    },
    methods: {
      onClick() {
        this.visible = true;
      },
      modalClosed() {
        this.visible = false;
      },
    },
  };
</script>

<style>
  .sample {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: 5% auto;
  }

  .cv-text-input {
    margin: 30px 0;
  }
</style>
