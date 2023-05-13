    <template>
  <div class="container">
    <div style="margin: 6px; padding: 10px">
      <cv-form @submit.prevent="onClick">
        <cv-text-input
          label="First Name"
          placeholder="First Name"
          name="Name_First"
          v-model="contactUsForm.Name_First"
        >
        </cv-text-input>

        <cv-text-input
          label="Last Name"
          placeholder="Last Name"
          name="Name_Last"
          v-model="contactUsForm.Name_Last"
        >
        </cv-text-input>

        <cv-text-input
          label="Email"
          placeholder="anon@example.com"
          name="Email"
          v-model="contactUsForm.Email"
        >
        </cv-text-input>

        <cv-text-area
          label="Message"
          helper-text=""
          name="MultiLine"
          v-model="contactUsForm.Message"
        >
        </cv-text-area>

        <br />

        <cv-button @click="onClick">Submit</cv-button>
      </cv-form>
    </div>
  </div>
</template>


<script>
export default {
  name: "ContactUsPanel",
  data() {
    return {
      contactUsForm: { Name_First: "", Name_Last: "", Email: "", Message: "" },
    };
  },
  methods: {
    onClick() {
      this.submit();
    },
    modalClosed() {
      this.visible = false;
    },

    submit() {
      const formData = new FormData();
      formData.append("Name_First", this.contactUsForm.Name_First);
      formData.append("Name_Last", this.contactUsForm.Name_First);

      formData.append("Email", this.contactUsForm.Email);

      formData.append("Message", this.contactUsForm.Message);

      console.log(this.contactUsForm);

      fetch(
        "https://forms.zohopublic.in/individual30/form/ContactUs/formperma/VjPKE8eV7Jmh08IQIuzh-4bj31LvDc3y-zd1eZ2aH4c/htmlRecords/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded ; charset=UTF-8",
          },
          body: formData,
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert(
              "Server returned " + response.status + " : " + response.statusText
            );
          }
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>